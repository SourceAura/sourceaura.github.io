const clamp01 = v => Math.max(0, Math.min(1, v));

export function initAseClient() {
  if (typeof window === "undefined") return;

  console.log("[ASE] initAseClient called");

  const session = {
    startTime: performance.now(),
    lastActivity: performance.now(),
    idleTime: 0,
    interactions: 0,
    scrollSamples: [],
  };

  window.__aseSession = session;

  const markActivity = () => {
    session.interactions++;
    session.lastActivity = performance.now();
  };

  ["click", "keydown", "pointerdown", "touchstart"].forEach(evt => {
    window.addEventListener(evt, markActivity, { passive: true });
  });

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

  setInterval(() => {
    if (performance.now() - session.lastActivity > 2000) {
      session.idleTime += 500;
    }
  }, 500);

  async function sendToAse() {
    const now = performance.now();
    const timeOnSite = (now - session.startTime) / 1000;

    const avgScrollVelocity =
      session.scrollSamples.length
        ? session.scrollSamples.reduce((a, b) => a + b, 0) /
          session.scrollSamples.length
        : 0;

    const idleRatio =
      session.idleTime / Math.max(now - session.startTime, 1);

    const sessionVector = [
      clamp01(avgScrollVelocity * 40),
      clamp01(idleRatio),
      0, 0,
      clamp01(session.interactions / 40),
      clamp01(timeOnSite / 300),
      clamp01(timeOnSite / 300),
      clamp01(avgScrollVelocity * 20),
    ];

    try {
      const res = await fetch("http://127.0.0.1:8000/infer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: sessionVector }),
      });

      const data = await res.json();
      const aseWake = clamp01(data.embedding?.[3] ?? 0.5);

      document.documentElement.style.setProperty(
        "--ase-wake",
        aseWake.toFixed(3)
      );

      console.log("[ASE] wake:", aseWake);
    } catch {
      console.warn("[ASE] offline");
    }
  }

  window.addEventListener("load", () => {
    setTimeout(sendToAse, 600);
  });
}
