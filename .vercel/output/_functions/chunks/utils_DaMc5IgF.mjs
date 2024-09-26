;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f41c47ef-f45d-4784-a336-5f8dd350977b",e._sentryDebugIdIdentifier="sentry-dbid-f41c47ef-f45d-4784-a336-5f8dd350977b")}catch(e){}}();import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import './consts_Cz7b8feT.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function readingTime(html) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}
function getRandomSize() {
  const sizes = ["small", "medium", "large"];
  const weights = [0.5, 0.3, 0.2];
  const random = Math.random();
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (random < sum) return sizes[i];
  }
  return sizes[0];
}

export { cn as c, getRandomSize as g, readingTime as r };
//# sourceMappingURL=utils_DaMc5IgF.mjs.map
