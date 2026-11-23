import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh Sprint entry: a single original funny line about everyday life.
// The program writes exactly this line to /output/entry.txt (1-200 chars, UTF-8).
const LINE =
  "I bought a standing desk to get healthy — now I stand up to eat chips at 2 a.m. Progress.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error("line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
