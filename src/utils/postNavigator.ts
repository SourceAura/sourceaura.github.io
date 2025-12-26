type NavConfig = {
  prev?: string;
  next?: string;
};

export function attachPostNavigation({ prev, next }: NavConfig) {
  let startX = 0;
  let startY = 0;
  let tracking = false;

  // ── Touch swipe ─────────────────────────
  window.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    tracking = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  window.addEventListener("touchend", (e) => {
    if (!tracking) return;
    tracking = false;

    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;

    // horizontal intent only
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0 && next) window.location.href = next;
    if (dx > 0 && prev) window.location.href = prev;
  });

  // ── Mouse wheel (horizontal) ────────────
  let wheelLock = false;
  window.addEventListener("wheel", (e) => {
    if (wheelLock) return;
    if (Math.abs(e.deltaX) < 40) return;

    wheelLock = true;
    setTimeout(() => (wheelLock = false), 400);

    if (e.deltaX > 0 && next) window.location.href = next;
    if (e.deltaX < 0 && prev) window.location.href = prev;
  });

  // ── Keyboard ────────────────────────────
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && next) window.location.href = next;
    if (e.key === "ArrowLeft" && prev) window.location.href = prev;
  });
}
