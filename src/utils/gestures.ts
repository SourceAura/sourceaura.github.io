// src/utils/gestures.ts
// Global gesture interpreter (pinch + swipe ready)

export type Gesture =
  | "pinch-in"
  | "pinch-out"
  | "swipe-left"
  | "swipe-right"
  | "swipe-up"
  | "swipe-down";

type GestureHandler = (g: Gesture, e: PointerEvent) => void;

let handler: GestureHandler | null = null;
let mounted = false;

/* ───────────────── REGISTER ───────────────── */

export function registerGestureHandler(fn: GestureHandler) {
  handler = fn;
}

/* ───────────────── CORE DETECTION ───────────────── */

const pointers = new Map<number, PointerEvent>();
let lastDistance = 0;

function distance(a: PointerEvent, b: PointerEvent) {
  const dx = a.clientX - b.clientX;
  const dy = a.clientY - b.clientY;
  return Math.hypot(dx, dy);
}

/* ───────────────── MOUNT (ONCE) ───────────────── */

export function mountGestures() {
  if (mounted) return;
  mounted = true;

  window.addEventListener(
    "pointerdown",
    (e) => {
      pointers.set(e.pointerId, e);
    },
    { passive: true },
  );

  window.addEventListener(
    "pointermove",
    (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, e);

      // ── PINCH IN ──
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = distance(a, b);

        if (lastDistance && d < lastDistance - 12) {
          handler?.("pinch-in", e);
          lastDistance = 0;
          pointers.clear();
        } else {
          lastDistance = d;
        }
      }
    },
    { passive: true },
  );

  window.addEventListener(
    "pointerup",
    (e) => {
      pointers.delete(e.pointerId);
      lastDistance = 0;
    },
    { passive: true },
  );
}
