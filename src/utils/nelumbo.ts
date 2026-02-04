// nelumbo.ts
// Client-only behavior for Nelumbo carousel + HUD.

let __nelumboMounted = false;

export default function initNelumbo() {
  console.log("[Nelumbo] initNelumbo boot", {
    hasShell: !!shell,
    hasRing: !!ring,
    items: items.length,
    shellHidden: shell ? (shell as HTMLElement).hidden : null,
  });

  // Expose helpers for quick console testing:
  (window as any).__nelumbo = {
    open: () => window.dispatchEvent(new CustomEvent("qi:toggle-petals")),
    close: () => window.dispatchEvent(new CustomEvent("gesture:close-petals")),
  };

  if (typeof window === "undefined") return;
  if (__nelumboMounted) return; // prevent double init if script runs twice
  __nelumboMounted = true;

  const shell = document.getElementById("petal-shell") as HTMLElement | null;
  const ring = document.getElementById("petal-ring") as HTMLElement | null;
  const items = ring
    ? [...ring.querySelectorAll<HTMLElement>(".carousel-item")]
    : [];

  const hud = document.getElementById("petal-hud") as HTMLElement | null;
  const hudClose = document.getElementById(
    "hud-close",
  ) as HTMLButtonElement | null;

  const hudTitle = hud?.querySelector<HTMLElement>("[data-hud-title]");
  const hudImg = hud?.querySelector<HTMLImageElement>("[data-hud-img]");
  const hudDesc = hud?.querySelector<HTMLElement>("[data-hud-desc]");
  const hudArticle = hud?.querySelector<HTMLElement>("[data-hud-article]");
  const hudDate = hud?.querySelector<HTMLElement>("[data-hud-date]");
  const hudRT = hud?.querySelector<HTMLElement>("[data-hud-rt]");
  const hudLink = hud?.querySelector<HTMLAnchorElement>("[data-hud-link]");

  if (!shell || !ring || items.length === 0) return;

  const count = items.length;
  const step = count ? 360 / count : 360;

  const getHudDock = () =>
    document.getElementById("hud-dock") ||
    document.querySelector("[data-hud-dock]");

  // ───────────────── CORE STATE ─────────────────
  let petalsOpen = false;

  function updatePetalVisibility() {
    // IMPORTANT: keep hidden in sync (your CSS might also use opacity/visibility)
    shell.hidden = !petalsOpen;
    shell.toggleAttribute("data-petals-open", petalsOpen);
    shell.setAttribute("aria-hidden", petalsOpen ? "false" : "true");
    if (!petalsOpen) focusedIndex = -1;
  }

  // HUD
  let hudOpen = false;
  let hudBootToken = 0;

  function setHudOpen(next: boolean) {
    hudOpen = !!next;
    if (!hud) return;

    hud.classList.toggle("is-open", hudOpen);
    hud.setAttribute("aria-hidden", hudOpen ? "false" : "true");

    if (hudOpen) {
      hudBootToken = (hudBootToken + 1) % 1000;
      hud.dataset.boot = String(hudBootToken);

      hud.classList.remove("is-booting");
      void hud.offsetWidth;
      hud.classList.add("is-booting");

      snapHudToDock(true);
    }
  }

  function closeHud() {
    setHudOpen(false);
  }

  // ───────────────── TOGGLE / CLOSE ─────────────────
  let isDragging = false;
  let isPulling = false;
  let pullVel = 0;
  let pullZ = 0;

  let focusedIndex = -1;

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  function start() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(tick);
  }

  function closePetals() {
    if (!petalsOpen) return;

    petalsOpen = false;
    isDragging = false;
    isPulling = false;
    pullVel = 0;
    pullZ = 0;

    closeHud();
    updatePetalVisibility();
    stop();
  }

  function openPetals() {
    if (petalsOpen) return;
    petalsOpen = true;
    updatePetalVisibility();
    applyTransforms();
    start();
  }

  // ✅ Qi toggles the carousel
  function onQiToggle() {
    if (petalsOpen) closePetals();
    else openPetals();

    console.log("[Nelumbo] after toggle", {
      petalsOpenAfter: petalsOpen,
      shellHiddenAfter: shell.hidden,
      hasAttr: shell.hasAttribute("data-petals-open"),
    });
  }

  // Click-away close + Esc close (keeps your previous behavior)
  function onShellPointerDown(e: PointerEvent) {
    if (!petalsOpen) return;

    const t = e.target as HTMLElement | null;

    // ignore HUD clicks
    if (t && hud && hud.contains(t)) return;

    // ignore orb/petal clicks
    const inPetal = t?.closest?.("[data-petal-surface], .carousel-item");
    if (inPetal) return;

    closePetals();
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key !== "Escape") return;

    if (hudOpen) {
      closeHud();
      return;
    }
    if (petalsOpen) closePetals();
  }

  // ───────────────── CAROUSEL PHYSICS ─────────────────
  const BASE_FRICTION = 0.96;
  const BASE_SNAP = 0.06;
  const velClamp = 3.2;
  const settleThreshold = 0.015;

  let angle = 0;
  let vel = 0;

  let lastAngle: number | null = null;
  let lastActive = -1;

  let snapTarget: number | null = null;
  let snapElastic = 0;

  let rafId = 0;
  let running = false;

  function getOmPulse() {
    const v = getComputedStyle(document.documentElement).getPropertyValue(
      "--pulse",
    );
    const p = Number(v);
    return Number.isFinite(p) ? p : 0.5;
  }

  let radius = 300;
  const mq = matchMedia("(max-width: 768px)");
  function updateRadius() {
    radius = mq.matches ? 220 : 300;
  }
  mq.addEventListener("change", updateRadius);
  updateRadius();

  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));
  const snapAngle = (a: number) => Math.round(a / step) * step;
  const normDeg = (d: number) => ((d % 360) + 360) % 360;

  const angDist = (a: number, b: number) => {
    const d = Math.abs(a - b) % 360;
    return d > 180 ? 360 - d : d;
  };

  const smoothstep = (e0: number, e1: number, x: number) => {
    const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
    return t * t * (3 - 2 * t);
  };

  const SIDE_KILL = 43;
  const SIDE_FADE_END = 52;

  function snapToIndex(index: number, immediate = false) {
    const target = -index * step;
    snapTarget = target;

    if (immediate) {
      angle = target;
      vel = 0;
      snapElastic = 0;
      applyTransforms();
      start();
      return;
    }

    const delta = target - angle;
    snapElastic = clamp(delta * 0.12, -18, 18);
    vel = 0;
    start();
  }

  function stripToText(html = "") {
    const tmp = document.createElement("div");
    tmp.innerHTML = String(html);
    return (tmp.innerText || tmp.textContent || "").trim();
  }

  function setHudDataFromItem(el: HTMLElement) {
    if (!el || !hud) return;

    const title =
      el.getAttribute("data-title") ||
      el.querySelector(".petal-content h1")?.textContent ||
      "Untitled";

    const desc =
      el.getAttribute("data-desc") ||
      el.querySelector(".petal-content p")?.textContent ||
      "";

    const date = el.getAttribute("data-date") || "";
    const rt = el.getAttribute("data-rt") || "";
    const href = el.getAttribute("data-href") || "#";

    const articleRaw = el.getAttribute("data-article") || "";
    const articleText = stripToText(articleRaw);

    const img = el.getAttribute("data-img") || "";

    if (hudTitle) hudTitle.textContent = title;
    if (hudDesc) hudDesc.textContent = desc;
    if (hudDate) hudDate.textContent = date;
    if (hudRT) hudRT.textContent = rt;

    if (hudLink) {
      hudLink.setAttribute("href", href);
      hudLink.setAttribute("aria-label", `Open ${title}`);
    }

    if (hudArticle)
      hudArticle.textContent = articleText || "No article loaded yet.";

    if (hudImg) {
      if (img) {
        hudImg.src = img;
        hudImg.alt = title;
        hudImg.style.display = "block";
      } else {
        hudImg.removeAttribute("src");
        hudImg.alt = "";
        hudImg.style.display = "none";
      }
    }
  }

  function clampToViewport(x: number, y: number) {
    const pad = 16;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const pfBottomVar = getComputedStyle(document.documentElement)
      .getPropertyValue("--pagefind-bottom")
      .trim();

    const pfBottom = Number.parseFloat(pfBottomVar);
    const minY = Number.isFinite(pfBottom) ? pfBottom + 12 : pad;

    const cx = Math.max(pad, Math.min(vw - pad, x));
    const cy = Math.max(minY, Math.min(vh - pad, y));

    return { cx, cy };
  }

  function snapHudToDock(immediate = false) {
    if (!hudOpen || !hud) return;

    const dock = getHudDock();
    if (!dock) {
      hud.style.setProperty("--hud-x", `50%`);
      hud.style.setProperty("--hud-y", `140px`);
      return;
    }

    const r = (dock as HTMLElement).getBoundingClientRect();
    const x = r.left + r.width * 0.5;
    const y = r.bottom + 12 + 220 * 0.5;

    const { cx, cy } = clampToViewport(x, y);
    hud.style.setProperty("--hud-x", `${cx}px`);
    hud.style.setProperty("--hud-y", `${cy}px`);

    if (immediate) hud.classList.add("no-snap");
    else hud.classList.remove("no-snap");
  }

  function updateHudEffects(activeSideVis = 1) {
    if (!hudOpen || !hud) return;

    const om = getOmPulse();
    hud.style.setProperty("--hud-pulse", String(om));
    hud.style.setProperty("--hud-signal", String(activeSideVis));
    hud.classList.toggle("is-signal-loss", activeSideVis < 0.35);

    const yaw = normDeg(
      (lastActive >= 0 ? lastActive : 0) * step + angle + snapElastic,
    );
    const t = (yaw - 180) / 180;

    const imgX = clamp(t, -1, 1) * 8;
    const imgY = Math.sin((angle * Math.PI) / 180) * 5;

    hud.style.setProperty("--seg-img-x", `${imgX.toFixed(2)}px`);
    hud.style.setProperty("--seg-img-y", `${imgY.toFixed(2)}px`);
    hud.style.setProperty("--seg-title-x", `${(imgX * 0.35).toFixed(2)}px`);
    hud.style.setProperty("--seg-title-y", `${(imgY * 0.35).toFixed(2)}px`);
    hud.style.setProperty("--seg-chips-x", `${(imgX * 0.55).toFixed(2)}px`);
    hud.style.setProperty("--seg-chips-y", `${(imgY * 0.55).toFixed(2)}px`);
    hud.style.setProperty("--seg-article-x", `${(imgX * 0.25).toFixed(2)}px`);
    hud.style.setProperty("--seg-article-y", `${(imgY * 0.25).toFixed(2)}px`);
  }

  let pressTimer = 0;
  let pressStartX = 0;
  let pressStartY = 0;

  function openHudForIndex(i: number) {
    const el = items[i];
    if (!el) return;

    if (!petalsOpen) openPetals();

    focusedIndex = i;
    snapToIndex(i, false);

    setHudDataFromItem(el);
    setHudOpen(true);
    snapHudToDock(true);
    start();
  }

  function armLongPress(el: HTMLElement, index: number) {
    el.addEventListener(
      "pointerdown",
      (e: PointerEvent) => {
        if ((e as any).pointerType === "mouse" && (e as any).button !== 0)
          return;

        pressStartX = e.clientX;
        pressStartY = e.clientY;

        clearTimeout(pressTimer);
        pressTimer = window.setTimeout(() => openHudForIndex(index), 420);

        (el as any).setPointerCapture?.((e as any).pointerId);
      },
      { passive: true },
    );

    el.addEventListener(
      "pointermove",
      (e: PointerEvent) => {
        const dx = e.clientX - pressStartX;
        const dy = e.clientY - pressStartY;
        if (Math.abs(dx) + Math.abs(dy) > 10) clearTimeout(pressTimer);
      },
      { passive: true },
    );

    el.addEventListener("pointerup", () => clearTimeout(pressTimer), {
      passive: true,
    });
    el.addEventListener("pointercancel", () => clearTimeout(pressTimer), {
      passive: true,
    });
  }

  function applyTransforms() {
    if (!ring) return;
    if (angle === lastAngle) return;
    lastAngle = angle;

    ring.style.transform = `translateZ(0) rotateY(${angle + snapElastic}deg)`;

    const normalized = ((angle % 360) + 360) % 360;
    const active = ((Math.round(-normalized / step) % count) + count) % count;

    let activeSideVis = 1;

    if (active !== lastActive) {
      lastActive = active;
      items.forEach((el, i) => el.classList.toggle("active", i === active));
      if (hudOpen) setHudDataFromItem(items[active]);
    }

    const maxDist = Math.floor(count / 2 || 1);
    const om = getOmPulse();

    items.forEach((el, i) => {
      let dist = Math.abs(i - active);
      dist = Math.min(dist, count - dist);

      const depth = Math.min(1, dist / maxDist);
      el.style.setProperty("--petal-depth", depth.toFixed(4));
      el.style.setProperty("--petal-prox", (1 - depth).toFixed(4));

      const yaw = normDeg(i * step + angle + snapElastic);
      const sideDist = Math.min(angDist(yaw, 90), angDist(yaw, 270));
      const sideVis = smoothstep(SIDE_KILL, SIDE_FADE_END, sideDist);

      if (i === active) activeSideVis = sideVis;

      const depthVis = 1 - depth * 0.7;
      const finalVis = depthVis * sideVis;
      el.style.opacity = finalVis.toFixed(3);

      el.style.pointerEvents = sideVis < 0.08 ? "none" : "auto";
      el.style.visibility = sideVis < 0.02 ? "hidden" : "visible";

      // keep your existing “active pop” / pull behavior exactly as you had it:
      const activeBias = i === active ? 22 + (om - 0.5) * 10 : 0;
      const pull = i === active ? pullZ : 0;

      // critical for your CSS counter-rotate
      el.style.setProperty(
        "--item-yaw",
        `${i * step + angle + snapElastic}deg`,
      );

      el.style.transform = `translate(-50%, -50%)
        rotateY(${i * step}deg)
        translateZ(${radius + activeBias + pull}px)`;
    });

    snapHudToDock(false);
    updateHudEffects(activeSideVis);
  }

  function tick() {
    if (!running) return;

    const om = getOmPulse();
    const breath = (om - 0.5) * 2;

    const friction = BASE_FRICTION * (1 - breath * 0.015);
    const snapStrength = BASE_SNAP * (1 + breath * 0.06);

    angle += vel;
    vel *= friction;

    if (snapTarget !== null) {
      const d = snapTarget - angle;
      angle += d * snapStrength;
      snapElastic *= 0.78;

      if (Math.abs(d) < 0.01 && Math.abs(snapElastic) < 0.2) {
        angle = snapTarget;
        vel = 0;
        snapElastic = 0;
        snapTarget = null;
      }
    }

    if (snapTarget === null && Math.abs(vel) < settleThreshold) {
      const snapped = snapAngle(angle);
      angle += (snapped - angle) * snapStrength;

      if (Math.abs(snapped - angle) < 0.001) {
        angle = snapped;
        vel = 0;
        running = false;
        applyTransforms();
        return;
      }
    }

    applyTransforms();
    rafId = requestAnimationFrame(tick);
  }

  // Drag behavior (unchanged from your inline intent)
  function onShellPointerMove(e: PointerEvent) {
    if (!petalsOpen) return;
    if (!isDragging) return;
    if (hudOpen) return;

    const movementX = (e as any).movementX ?? 0;
    vel = clamp(movementX * 0.12, -velClamp, velClamp);
    angle += movementX * 0.12;
    start();
  }

  function onShellPointerUp() {
    isDragging = false;
    isPulling = false;
  }

  // Each item interaction
  items.forEach((el) => {
    const index = Number(el.dataset.index);
    const surface =
      (el.querySelector("[data-petal-surface]") as HTMLElement) || el;

    armLongPress(surface, index);

    el.addEventListener(
      "pointerdown",
      (e: PointerEvent) => {
        if (!petalsOpen) return;
        if ((e as any).pointerType === "mouse" && (e as any).button !== 0)
          return;
        if (hudOpen) return;

        e.preventDefault();
        e.stopPropagation();

        focusedIndex = index;
        snapToIndex(index, false);

        isDragging = true;
        isPulling = false;
        pullVel = 0;

        (el as any).setPointerCapture?.((e as any).pointerId);
        start();
      },
      { passive: false },
    );
  });

  // ───────────────── LISTENERS (registered once) ─────────────────
  hudClose?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeHud();
  });

  window.addEventListener("qi:toggle-petals", onQiToggle);
  shell.addEventListener("pointerdown", onShellPointerDown, { passive: true });
  shell.addEventListener("pointermove", onShellPointerMove, { passive: true });
  shell.addEventListener("pointerup", onShellPointerUp, { passive: true });
  window.addEventListener("keydown", onKeyDown);

  window.addEventListener("resize", () => snapHudToDock(true));
  window.addEventListener("scroll", () => snapHudToDock(true), {
    passive: true,
  });

  // ───────────────── INITIAL ─────────────────
  // Start hidden, but with transforms precomputed
  updatePetalVisibility();
  applyTransforms();
  stop();

  // ───────────────── CLEANUP (Astro swaps) ─────────────────
  function cleanup() {
    window.removeEventListener("qi:toggle-petals", onQiToggle);
    shell.removeEventListener("pointerdown", onShellPointerDown as any);
    shell.removeEventListener("pointermove", onShellPointerMove as any);
    shell.removeEventListener("pointerup", onShellPointerUp as any);
    window.removeEventListener("keydown", onKeyDown);
    mq.removeEventListener("change", updateRadius);
    cancelAnimationFrame(rafId);
    clearTimeout(pressTimer);
    __nelumboMounted = false;
  }

  window.addEventListener("astro:before-swap", cleanup, { once: true });
}
