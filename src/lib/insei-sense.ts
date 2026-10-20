/**
 * Insei sense — production-safe behavioral sensing.
 *
 * Local only. No vectors to any server, no fetch, no cookies.
 * sessionStorage at most, cleared when the tab closes.
 * Drives `--insei-wake` (0..1, smoothed) and the Phase-3 whisper triggers.
 *
 * Once-guarded: safe to import on every view-transition navigation.
 */

export type InseiTrigger =
  | "dwell-euthymia"
  | "dwell-insei"
  | "petal-loop"
  | "idle-quiet"
  | "resume-focus";

const TRIGGER_ENTRY: Record<InseiTrigger, string | null> = {
  "dwell-euthymia": "trial-deep",
  "dwell-insei": "insei",
  "petal-loop": "sanctums",
  "idle-quiet": null, // eye-brighten only; the window greets on open
  "resume-focus": "service",
};

const seen = (k: string): boolean => {
  try {
    return sessionStorage.getItem("insei.w." + k) === "1";
  } catch {
    return false;
  }
};
const markSeen = (k: string): void => {
  try {
    sessionStorage.setItem("insei.w." + k, "1");
  } catch {
    /* private mode */
  }
};

function fire(trigger: InseiTrigger): void {
  if (seen(trigger)) return;
  markSeen(trigger);
  window.dispatchEvent(
    new CustomEvent("insei:whisper", {
      detail: { trigger, entryId: TRIGGER_ENTRY[trigger] },
    }),
  );
}

const clamp01 = (n: number): number => Math.max(0, Math.min(1, n));

export function initInseiSense(): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as Record<string, unknown>;
  if (w.__inseiSenseReady) return;
  w.__inseiSenseReady = true;

  const start = Date.now();
  let lastActivity = Date.now();
  let interactions = 0;
  let idleMs = 0;

  // scroll velocity, decaying
  let scrollVel = 0;
  let lastY = window.scrollY;
  let lastT = Date.now();
  window.addEventListener(
    "scroll",
    () => {
      const now = Date.now();
      const dt = Math.max(now - lastT, 1);
      const v = Math.abs(window.scrollY - lastY) / dt; // px per ms
      scrollVel = Math.min(v / 4, 1); // normalize: 4px/ms ≈ fast flick
      lastY = window.scrollY;
      lastT = now;
      lastActivity = now;
      interactions++;
    },
    { passive: true },
  );
  window.setInterval(() => {
    scrollVel *= 0.9;
  }, 100);

  window.addEventListener("mousemove", () => { lastActivity = Date.now(); }, { passive: true });
  window.addEventListener(
    "keydown",
    () => {
      lastActivity = Date.now();
      interactions++;
    },
    { passive: true },
  );

  // click heat: clicks in the trailing 30s
  const clicks: number[] = [];
  window.addEventListener(
    "click",
    () => {
      const now = Date.now();
      clicks.push(now);
      while (clicks.length && now - clicks[0] > 30000) clicks.shift();
      lastActivity = now;
      interactions++;
    },
    { passive: true },
  );

  // dwell tracking per path
  let path = location.pathname;
  let pathSince = Date.now();
  const petalSlugs = new Set<string>();
  const notePetal = (p: string): void => {
    const m = p.match(/^\/petals\/([^/]+)/);
    if (m) petalSlugs.add(m[1]);
  };
  notePetal(path);

  const onNav = (): void => {
    path = location.pathname;
    pathSince = Date.now();
    notePetal(path);
  };
  document.addEventListener("astro:page-load", onNav);

  // focus depth: long unbroken visible stretches
  let visibleSince = Date.now();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) visibleSince = Date.now();
  });

  let smoothWake = 0.5;

  // wake heuristic → --insei-wake, ~4Hz
  window.setInterval(() => {
    const now = Date.now();
    const elapsed = Math.max((now - start) / 1000, 1);
    if (now - lastActivity > 2000) idleMs += 250;
    const idleRatio = idleMs / (now - start);
    const rate = Math.min(interactions / elapsed / 2, 1); // 2 interactions/s ≈ engaged
    const heat = Math.min(clicks.length / 12, 1);
    const target = clamp01(0.18 + rate * 0.45 + scrollVel * 0.25 + heat * 0.2 - idleRatio * 0.45);
    smoothWake += (target - smoothWake) * 0.25;
    document.documentElement.style.setProperty("--insei-wake", smoothWake.toFixed(4));
  }, 250);

  // whisper triggers, checked 1Hz
  window.setInterval(() => {
    const now = Date.now();
    const dwell = (now - pathSince) / 1000;
    const idle = (now - lastActivity) / 1000;
    const slug = (path.match(/^\/petals\/([^/]+)/) || [])[1] ?? "";

    if (dwell >= 12 && (path.includes("/euthymia") || slug.includes("euthymia"))) {
      fire("dwell-euthymia");
    }
    if (dwell >= 12 && slug.includes("insei")) {
      fire("dwell-insei");
    }
    if (petalSlugs.size >= 3) {
      fire("petal-loop");
    }
    if (idle >= 45) {
      fire("idle-quiet");
    }
    if (dwell >= 20 && path === "/resume") {
      fire("resume-focus");
    }
    void visibleSince;
  }, 1000);
}
