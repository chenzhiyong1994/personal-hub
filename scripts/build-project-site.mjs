import {
  copyFile,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(repo, ".project-site");
if (dirname(output) !== repo || !output.startsWith(repo + sep))
  throw new Error("Invalid project-site output directory");
const files = new Map([
  ["site/index.html", "index.html"],
  ["site/styles.css", "styles.css"],
  ["site/main.js", "main.js"],
  ["site/favicon.svg", "favicon.svg"],
  ["docs/assets/desktop-preview.webp", "assets/desktop-preview.webp"],
  ["docs/assets/mobile-preview.webp", "assets/mobile-preview.webp"],
]);
// Validate inputs before replacing this script's generated output directory.
await Promise.all(
  [...files.keys()].map((path) => readFile(resolve(repo, path))),
);
await rm(output, { recursive: true, force: true });
for (const [source, target] of files) {
  const destination = resolve(output, target);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(repo, source), destination);
}
await writeFile(resolve(output, ".nojekyll"), "");
const html = await readFile(resolve(output, "index.html"), "utf8");
for (const match of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g)) {
  await readFile(resolve(output, match[1]));
}
const outputs = await readdir(output, { recursive: true });
console.log(
  `Project site built in .project-site/ (${files.size + 1} files; all local HTML assets verified).`,
);
if (outputs.some((path) => /(?:\.env|node_modules|\.git\/|src\/)/.test(path)))
  throw new Error("Unexpected file in project-site output");
