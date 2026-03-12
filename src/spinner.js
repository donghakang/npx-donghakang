import chalk from "chalk";

const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const colors = [chalk.cyan, chalk.blue, chalk.magenta, chalk.red, chalk.yellow, chalk.green];

export function runSpinner(ms = 2000) {
  return new Promise((resolve) => {
    let i = 0;
    const id = setInterval(() => {
      const f = frames[i % frames.length];
      const c = colors[i % colors.length];
      process.stdout.write(`\r${c(`  ${f}  Loading donghakang's card...`)}`);
      i++;
    }, 80);
    setTimeout(() => {
      clearInterval(id);
      process.stdout.write("\r" + " ".repeat(50) + "\r");
      resolve();
    }, ms);
  });
}
