/**
 * Insei boot: imported once by Layout.astro (production-safe).
 * Wires the sense module and publishes the mind on window.__insei
 * for the keeper window's inline script to consume (no bundler imports
 * inside inline scripts: the AseHud/window.__ase pattern).
 */
import { initInseiSense } from "./insei-sense";
import {
  inseiAsk,
  inseiWhisper,
  inseiRouteLabel,
  inseiGreeting,
} from "./insei-mind";

initInseiSense();

let sessionWhisper: string | null = null;
try {
  sessionWhisper = sessionStorage.getItem("insei.lastWhisper");
} catch {
  /* private mode safe */
}

interface InseiApi {
  ready: boolean;
  ask: typeof inseiAsk;
  whisper: (entryId: string) => ReturnType<typeof inseiWhisper>;
  routeLabel: typeof inseiRouteLabel;
  greeting: typeof inseiGreeting;
  lastWhisper: string | null;
}

const insei: InseiApi = {
  ready: true,
  ask: inseiAsk,
  whisper: (entryId: string) => {
    const ans = inseiWhisper(entryId);
    if (ans?.text) {
      insei.lastWhisper = ans.text;
    }
    return ans;
  },
  routeLabel: inseiRouteLabel,
  greeting: inseiGreeting,
  get lastWhisper(): string | null {
    return sessionWhisper;
  },
  set lastWhisper(text: string | null) {
    sessionWhisper = text;
    try {
      if (text) sessionStorage.setItem("insei.lastWhisper", text);
      else sessionStorage.removeItem("insei.lastWhisper");
    } catch {
      /* private mode safe */
    }
  },
};

if (typeof window !== "undefined") {
  window.addEventListener("insei:whisper", (e: Event) => {
    const custom = e as CustomEvent<{ trigger: string; entryId: string | null }>;
    const entryId = custom.detail?.entryId;
    if (entryId) {
      const ans = inseiWhisper(entryId);
      if (ans?.text) {
        insei.lastWhisper = ans.text;
      }
    }
  });
}

(window as unknown as Record<string, unknown>).__insei = insei;
