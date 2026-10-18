/**
 * Insei boot — imported once by Layout.astro (production-safe).
 * Wires the sense module and publishes the mind on window.__insei
 * for the keeper window's inline script to consume (no bundler imports
 * inside inline scripts — the AseHud/window.__ase pattern).
 */
import { initInseiSense } from "./insei-sense";
import {
  inseiAsk,
  inseiWhisper,
  inseiRouteLabel,
  inseiGreeting,
} from "./insei-mind";

initInseiSense();

(window as unknown as Record<string, unknown>).__insei = {
  ready: true,
  ask: inseiAsk,
  whisper: inseiWhisper,
  routeLabel: inseiRouteLabel,
  greeting: inseiGreeting,
};
