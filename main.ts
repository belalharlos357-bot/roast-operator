// roast-operator entry: print the one-line entry from entry.txt
// The entry is a single line; trailing whitespace is trimmed before printing.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(dir, "entry.txt"), "utf8").trim();
process.stdout.write(line + "\n");
