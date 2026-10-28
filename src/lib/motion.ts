/**
 * Motion primitives: dependency-free ports of the React Bits effects used
 * on this site. The CSS half lives in src/styles/motion.css. Hidden states
 * are scoped under `.js-motion` (set only by the inline gate in
 * Head.astro), so with JS off or a failed bundle, nothing stays hidden.
 */

const REVEAL_MARGIN = "0px 0px -12% 0px";

/** Animate a number from 0 to `to`. Safe to call on any element. */
export function countUp(
  el: HTMLElement | null,
  to: number,
  duration = 700,
): void {
  if (!el || !Number.isFinite(to)) return;

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = String(to);
    return;
  }

  // Driven by wall-clock time rather than rAF, so the number still lands on its
  // final value when the tab is backgrounded mid-animation (rAF stops entirely
  // there and would leave the count stuck part-way).
  const start = performance.now();
  const tick = () => {
    const t = Math.min(1, (performance.now() - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(to * eased));
    if (t < 1) window.setTimeout(tick, 16);
  };
  tick();
}

/** Wrap each word of an element in a span so it can be staggered in. */
function splitWords(el: HTMLElement): void {
  // Never touch an element with children: splitting would destroy inline
  // markup such as links, <code> or <em> inside a rendered markdown heading.
  if (el.children.length > 0) return;

  const text = (el.textContent ?? "").trim();
  if (!text) return;

  const words = text.split(/\s+/);
  el.textContent = "";

  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.className = "bt-word";
    span.textContent = word;
    span.style.setProperty("--bt-delay", `${i * 55}ms`);
    el.appendChild(span);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
}

/** Run `fn` once for each element, the first time it enters the viewport. */
function onEnter(
  els: HTMLElement[],
  fn: (el: HTMLElement) => void,
  threshold: number,
): void {
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach(fn);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        fn(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { rootMargin: REVEAL_MARGIN, threshold },
  );

  els.forEach((el) => io.observe(el));
}

/** SpotlightCard: light the card from where the pointer is. */
function initSpotlight(): void {
  if (!("PointerEvent" in window)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document
    .querySelectorAll<HTMLElement>("[data-spotlight]")
    .forEach((el) => {
      if (el.dataset.motionBound) return;
      el.dataset.motionBound = "1";
      el.addEventListener(
        "pointermove",
        (e) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
          el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
        },
        { passive: true },
      );
    });
}

/** HoloCard: a sheen that sweeps in from the pointer side. */
function initHolo(): void {
  if (!("PointerEvent" in window)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document
    .querySelectorAll<HTMLElement>("[data-holo]")
    .forEach((el) => {
      if (el.dataset.motionBound) return;
      el.dataset.motionBound = "1";
      el.addEventListener(
        "pointermove",
        (e) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          el.style.setProperty("--holo-angle", `${angle}deg`);
        },
        { passive: true },
      );
    });
}

/** DecryptedText: wrap each character behind a stand-in glyph. */
function splitDecrypt(el: HTMLElement): void {
  // initMotion runs on the initial load and again on astro:page-load, so an
  // already-split element must be left alone - re-splitting would turn the
  // resolved title back into stand-in glyphs.
  if (el.querySelector(".dc-char")) return;

  const text = (el.textContent ?? "").trim();
  if (!text) return;

  const GLYPHS = "!<>-_\\/[]{}=+*^?#________";
  const chars = [...text];
  el.textContent = "";

  chars.forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "dc-char";
    span.dataset.real = ch;
    // Deterministic stand-in, so the title reads as encrypted until revealed
    // rather than flickering on every paint.
    span.textContent =
      ch === " " ? "\\u00A0" : GLYPHS[(i * 7 + 3) % GLYPHS.length];
    span.style.setProperty("--dc-delay", `${i * 26}ms`);
    el.appendChild(span);
  });
}

/** ShinyText: one sweep of light across an element. */
export function applyShiny(el: HTMLElement | null): void {
  if (!el) return;
  el.classList.remove("shiny-text");
  void el.offsetWidth; // restart the sweep
  el.classList.add("shiny-text");
}

export function initMotion(): void {
  const root = document.documentElement;

  // Only run where the no-FOUC gate was set; otherwise leave the page alone.
  if (!root.classList.contains("js-motion")) return;
  if (root.dataset.motionReady === "1") return;
  root.dataset.motionReady = "1";

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  initSpotlight();
  initHolo();

  const decryptEls = [
    ...document.querySelectorAll<HTMLElement>("[data-decrypt]"),
  ];
  decryptEls.forEach(splitDecrypt);
  const revealDecrypt = (el: HTMLElement) => {
    el.classList.add("is-in");
    el.querySelectorAll<HTMLElement>(".dc-char").forEach((c) => {
      if (c.dataset.real !== undefined) c.textContent = c.dataset.real;
    });
  };
  if (reduced) decryptEls.forEach(revealDecrypt);
  else onEnter(decryptEls, revealDecrypt);

  // Threshold 0 on purpose: rootMargin already holds the trigger back until the
  // element is properly in frame, and a non-zero threshold is unreachable for
  // any element taller than the viewport.
  const reveals = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
  if (reduced) reveals.forEach((el) => el.classList.add("is-in"));
  else onEnter(reveals, (el) => el.classList.add("is-in"), 0);

  // Rendered markdown cannot carry the attribute, so headings inside a
  // [data-blur-headings] scope opt in by selector. The attribute is stamped on
  // each heading (not the scope) so they are observed individually: a tall
  // scope container would never satisfy an intersection threshold.
  document
    .querySelectorAll<HTMLElement>("[data-blur-headings] :is(h1, h2)")
    .forEach((h) => h.setAttribute("data-blur-text", ""));

  const blurEls = [
    ...document.querySelectorAll<HTMLElement>("[data-blur-text]"),
  ];
  blurEls.forEach(splitWords);
  if (reduced) blurEls.forEach((el) => el.classList.add("is-in"));
  else onEnter(blurEls, (el) => el.classList.add("is-in"), 0);

  // Declarative form: the target is known at render time. For values that
  // arrive async, call countUp() directly instead.
  const counters = [
    ...document.querySelectorAll<HTMLElement>("[data-count-to]"),
  ];
  const runCount = (el: HTMLElement) => {
    const to = Number(el.dataset.countTo ?? "");
    if (!Number.isFinite(to)) return;
    countUp(el, to, Number(el.dataset.countDur ?? 700));
  };
  if (reduced) counters.forEach(runCount);
  else onEnter(counters, runCount, 0);
}

// Nelumbo's HUD lives in an is:inline script, which cannot import. Expose the
// helpers it needs, alongside the other globals it already uses
// (__focusedIndex, __pulse, __ase).
(window as any).__countUp = countUp;
(window as any).__shiny = applyShiny;

function boot(): void {
  initMotion();
}

/**
 * Safety net. A scroll container, an `overflow: hidden` ancestor or a
 * late-rendering panel can leave an element permanently unobserved and
 * stuck at opacity 0, so anything on screen that has not transitioned yet
 * is revealed after a short delay.
 */
window.setTimeout(() => {
  const inView = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    return (
      r.bottom > 0 &&
      r.top < window.innerHeight &&
      r.right > 0 &&
      r.left < window.innerWidth
    );
  };

  document
    .querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-in), [data-blur-text]:not(.is-in)",
    )
    .forEach((el) => {
      if (inView(el)) el.classList.add("is-in");
    });
}, 1200);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

// View-transition safe: <html> persists across navigations, so clear the guard
// and re-run against the freshly swapped DOM.
document.addEventListener("astro:page-load", () => {
  document.documentElement.dataset.motionReady = "";
  boot();
});
