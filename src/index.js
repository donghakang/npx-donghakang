import { runSpinner } from "./spinner.js";
import { renderPlasma } from "./plasma.js";
import { renderFrame } from "./card.js";

await runSpinner(2000);

process.stdout.write("\x1b[?25l");

let A = 1.0,
  B = 1.0;

const firstFrame = renderFrame(renderPlasma(A, B));
const lineCount = firstFrame.split("\n").length;
process.stdout.write(firstFrame + "\n");

const interval = setInterval(() => {
  A += 0.04;
  B += 0.02;
  const frame = renderFrame(renderPlasma(A, B));
  process.stdout.write(`\x1b[${lineCount}A`);
  process.stdout.write(frame + "\n");
}, 80);

process.on("SIGINT", () => {
  clearInterval(interval);
  process.stdout.write("\x1b[?25h\n");
  process.exit(0);
});
