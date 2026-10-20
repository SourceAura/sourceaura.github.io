/**
 * Insei mind — retrieval + intent matching + composed answers.
 * No model, no network. The corpus is the brain; this is the reflex.
 */
import { INSEI_CORPUS, INSEI_META, type InseiEntry } from "../content/insei-corpus";

export interface InseiAnswer {
  entryId: string;
  /** summary with {status} replaced when a statusLine is provided */
  text: string;
  facts: { text: string; link?: string; linkLabel?: string }[];
  routes: string[];
  /** true when the visitor asked to go deeper and facts were expanded */
  expanded: boolean;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function byId(id: string): InseiEntry | undefined {
  return INSEI_CORPUS.find((e) => e.id === id);
}

const DEEP_RE = /\b(tell me more|go deeper|deeper|more detail|details|expand)\b/;

let lastEntryId: string | null = null;

function routeLabel(id: string): string {
  const e = byId(id);
  if (!e) return id;
  const labels: Record<string, string> = {
    identity: "who is Insei",
    sanctums: "three sanctums",
    insei: "insei",
    euthymia: "euthymia",
    emaki: "emaki",
    steel: "sensei's steel",
    service: "take sensei into service",
    booking: "commission sensei",
    contact: "contact",
    status: "is sensei in the lab",
    help: "what can you do",
    thanks: "farewell",
    "trial-deep": "secrets of the trial",
    boundaries: "—",
  };
  return labels[id] ?? e.topics[0] ?? id;
}

function compose(
  entry: InseiEntry,
  opts: { statusLine?: () => string; expanded?: boolean },
): InseiAnswer {
  let text = entry.summary;
  if (text.includes("{status}") && opts.statusLine) {
    text = text.replace("{status}", opts.statusLine());
  } else if (text.includes("{status}")) {
    text = text.replace("{status}", "Sensei keeps his own hours — ask me again and I will read the flame.");
  }
  return {
    entryId: entry.id,
    text,
    facts: opts.expanded ? entry.facts : [],
    routes: (entry.routes ?? []).filter((r) => r !== "boundaries"),
    expanded: !!opts.expanded && entry.facts.length > 0,
  };
}

/**
 * Answer a visitor's message. Pure function of the input (+ optional hooks).
 * Never throws: the worst case is the honest fallback.
 */
export function inseiAsk(
  raw: string,
  hooks: { statusLine?: () => string } = {},
): InseiAnswer {
  const input = normalize(raw);
  if (!input) {
    return compose(byId("help")!, hooks);
  }

  // "tell me more" expands the last entry's facts instead of re-matching.
  if (DEEP_RE.test(input) && lastEntryId) {
    const prev = byId(lastEntryId);
    if (prev && prev.facts.length) {
      return compose(prev, { ...hooks, expanded: true });
    }
  }

  let best: InseiEntry | null = null;
  let bestLen = 0;
  let bestCount = 0;

  for (const entry of INSEI_CORPUS) {
    let longest = 0;
    let count = 0;
    for (const t of entry.triggers) {
      if (input.includes(t)) {
        count++;
        if (t.length > longest) longest = t.length;
      }
    }
    if (
      longest > bestLen ||
      (longest === bestLen && count > bestCount && longest > 0)
    ) {
      best = entry;
      bestLen = longest;
      bestCount = count;
    }
  }

  // A bare "hi"/"hey"/"hello" with no other trigger → greeting.
  if (!best && /\b(hi|hey|hello|yo|greetings)\b/.test(input)) {
    best = byId("identity")!;
  }

  if (!best) {
    const fallback: InseiEntry = {
      id: "fallback",
      topics: [],
      triggers: [],
      summary: INSEI_META.fallback,
      facts: [],
      routes: ["sanctums", "steel", "service"],
    };
    lastEntryId = null;
    return compose(fallback, hooks);
  }

  lastEntryId = best.id;
  return compose(best, hooks);
}

/** Proactive whisper: fetch an entry's spoken line by id (Phase 3). */
export function inseiWhisper(entryId: string): InseiAnswer | null {
  const entry = byId(entryId);
  if (!entry) return null;
  lastEntryId = entry.id;
  return compose(entry, {});
}

export function inseiRouteLabel(id: string): string {
  return routeLabel(id);
}

export function inseiGreeting(): string {
  return INSEI_META.greeting;
}
