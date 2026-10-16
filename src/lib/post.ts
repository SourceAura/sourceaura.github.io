/**
 * Shared helpers for turning post content into card / HUD data.
 *
 * These run at build time (Astro evaluates the component template in Node),
 * so they are plain synchronous functions with no browser dependency.
 */

/** First Markdown image in a post body, resolved to a servable path. */
export function extractFirstImageFromMarkdown(md = ""): string | null {
  const m = md.match(/!\[.*?\]\((.*?)\)/);
  if (!m?.[1]) return null;

  const raw = String(m[1]).trim();
  if (raw.startsWith("http") || raw.startsWith("/")) return raw;

  return `/images/${raw.replace(/^\.?\//, "")}`;
}

/** Strip Markdown down to plain text (for reading-time word counts). */
export function stripMarkdownToText(md = ""): string {
  let t = String(md);

  t = t.replace(/^---[\s\S]*?---\s*/g, "");
  t = t.replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1");
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
  t = t.replace(/`([^`]+)`/g, "$1");
  t = t.replace(/^\s{0,3}#{1,6}\s+/gm, "");
  t = t.replace(/^\s{0,3}>\s?/gm, "");
  t = t.replace(/^\s*[-*+]\s+/gm, "");
  t = t.replace(/^\s*\d+\.\s+/gm, "");
  t = t.replace(/(\*\*|__)(.*?)\1/g, "$2");
  t = t.replace(/(\*|_)(.*?)\1/g, "$2");
  t = t.replace(/^\s{0,3}(-{3,}|\*{3,}|_{3,})\s*$/gm, "");
  t = t.replace(/\n{3,}/g, "\n\n");

  return t.trim();
}

export function readingTimeMinutes(md = ""): string {
  const words = stripMarkdownToText(md).split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min`;
}

export function formatDate(d: unknown): string {
  try {
    const date = new Date(d as never);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString(undefined, {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  } catch {
    return "";
  }
}
