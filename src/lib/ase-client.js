const clamp01 = v => Math.max(0, Math.min(1, v));

export function initAseClient() {
  if (typeof window === "undefined") return;

  console.log("[ASE] initAseClient CALLED");

  const API = "http://127.0.0.1:8000";
  const INFER_EVERY_MS = 6000;

  const session = {
    startTime: performance.now(),
    lastActivity: performance.now(),
    idleTime: 0,
    interactions: 0,
    scrollSamples: [],
    inferTimer: null,
  };

  window.__aseSession = session;

  // --- Activity ---
  const markActivity = () => {
    session.interactions++;
    session.lastActivity = performance.now();
  };

  ["click", "keydown", "pointerdown", "touchstart"].forEach(evt =>
    window.addEventListener(evt, markActivity, { passive: true })
  );

  // --- Scroll ---
  let lastScrollY = window.scrollY;
  let lastScrollT = performance.now();

  window.addEventListener("scroll", () => {
    const now = performance.now();
    const dy = Math.abs(window.scrollY - lastScrollY);
    const dt = now - lastScrollT;
    if (dt > 0) session.scrollSamples.push(dy / dt);
    lastScrollY = window.scrollY;
    lastScrollT = now;
    session.lastActivity = now;
  }, { passive: true });

  // --- Idle ---
  setInterval(() => {
    if (performance.now() - session.lastActivity > 2000) {
      session.idleTime += 500;
    }
  }, 500);

  function buildVector() {
    const now = performance.now();
    const timeOnSite = (now - session.startTime) / 1000;

    const avgScrollVelocity =
      session.scrollSamples.length
        ? session.scrollSamples.reduce((a, b) => a + b, 0) /
          session.scrollSamples.length
        : 0;

    const idleRatio = session.idleTime / Math.max(now - session.startTime, 1);

    return [
      clamp01(avgScrollVelocity * 40),
      clamp01(idleRatio),
      0, 0,
      clamp01(session.interactions / 40),
      clamp01(timeOnSite / 300),
      clamp01(timeOnSite / 300),
      clamp01(avgScrollVelocity * 20),
    ];
  }

  async function inferNow() {
    console.log("[ASE] infer tick");

    const values = buildVector();

    try {
      const res = await fetch(`${API}/infer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
      });

      const data = await res.json();
      const aseWake = clamp01(data.embedding?.[3] ?? 0.5);

      document.documentElement.style.setProperty("--ase-wake", aseWake);
      console.log("[ASE] wake", aseWake);
    } catch (e) {
      console.warn("[ASE] infer failed", e);
    }
  }

  window.addEventListener("load", () => {
    console.log("[ASE] window load → starting inference loop");
    setTimeout(inferNow, 600);
    session.inferTimer = setInterval(inferNow, INFER_EVERY_MS);
  });
}
