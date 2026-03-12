import chalk from "chalk";
import { link, vw } from "./utils.js";
import { PLASMA_W } from "./plasma.js";

const CW = 66;
const ML = "       ";
const bc = chalk.hex("#cccccc");

function boxTop() {
  return ML + bc("╔" + "═".repeat(CW) + "╗");
}
function boxBot() {
  return ML + bc("╚" + "═".repeat(CW) + "╝");
}
function boxEmpty() {
  return ML + bc("║") + " ".repeat(CW) + bc("║");
}
function boxContent(styledText, visibleWidth) {
  const pad = Math.max(0, CW - 4 - visibleWidth);
  return ML + bc("║") + "    " + styledText + " ".repeat(pad) + bc("║");
}

const introLines = [
  {
    text: chalk.white("안녕하세요 FE개발자 강동하입니다 👋🏻"),
    vw: vw("안녕하세요 FE개발자 강동하입니다 👋🏻"),
  },
  {
    text: chalk.white("단순한 기능을 넘어 몰입감 있는 비주얼과"),
    vw: vw("단순한 기능을 넘어 몰입감 있는 비주얼과"),
  },
  {
    text: chalk.white("매끄러운 인터렉션을 통해 사용자에게"),
    vw: vw("매끄러운 인터렉션을 통해 사용자에게"),
  },
  {
    text: chalk.white("즐거운 경험을 선사하는 것에 관심이 많습니다"),
    vw: vw("즐거운 경험을 선사하는 것에 관심이 많습니다"),
  },
  { text: "", vw: 0 },
  {
    text: chalk.white("Passionate about going beyond simple functionality"),
    vw: vw("Passionate about going beyond simple functionality"),
  },
  {
    text: chalk.white("to deliver unique user experiences through"),
    vw: vw("to deliver unique user experiences through"),
  },
  {
    text: chalk.white("immersive visuals and interactions."),
    vw: vw("immersive visuals and interactions."),
  },
];

const contacts = [
  {
    label: chalk.rgb(190, 190, 190).bold("      Work"),
    value: chalk.white("Frontend Developer @ADENASOFT"),
    lvw: 10,
    vvw: vw("Frontend Developer @ADENASOFT"),
  },
  {
    label: chalk.rgb(180, 180, 180).bold("       Web"),
    value: chalk.white(
      link("https://donghakang.xyz", "https://donghakang.xyz"),
    ),
    lvw: 10,
    vvw: vw("https://donghakang.xyz"),
  },
  {
    label: chalk.rgb(170, 170, 170).bold("    GitHub"),
    value: chalk.white(
      link("https://github.com/donghakang", "https://github.com/donghakang"),
    ),
    lvw: 10,
    vvw: vw("https://github.com/donghakang"),
  },
  {
    label: chalk.rgb(160, 160, 160).bold("  LinkedIn"),
    value: chalk.white(
      link(
        "https://linkedin.com/in/dkang0602",
        "https://linkedin.com/in/dkang0602",
      ),
    ),
    lvw: 10,
    vvw: vw("https://linkedin.com/in/dkang0602"),
  },
  {
    label: chalk.rgb(150, 150, 150).bold(" Instagram"),
    value: chalk.white(
      link(
        "https://instagram.com/donghakang",
        "https://instagram.com/donghakang",
      ),
    ),
    lvw: 10,
    vvw: vw("https://instagram.com/donghakang"),
  },
  {
    label: chalk.rgb(140, 140, 140).bold("      Mail"),
    value: chalk.white(
      link("mailto:dkang0602@gmail.com", "dkang0602@gmail.com"),
    ),
    lvw: 10,
    vvw: vw("dkang0602@gmail.com"),
  },
];

// Pre-render static portion (intro + contacts + bottom border)
const staticLines = [];
staticLines.push(boxEmpty());
for (const il of introLines) {
  staticLines.push(il.text === "" ? boxEmpty() : boxContent(il.text, il.vw));
}
staticLines.push(boxEmpty());
for (const c of contacts) {
  const content = `${c.label}:  ${c.value}`;
  const totalVw = c.lvw + 3 + c.vvw;
  staticLines.push(boxContent(content, totalVw));
}
staticLines.push(boxEmpty());
staticLines.push(boxBot());

const staticBlock = staticLines.join("\n");

export function renderFrame(plasmaLines) {
  const lines = [];
  lines.push(boxTop());
  lines.push(boxEmpty());

  const padL = Math.floor((CW - PLASMA_W) / 2);
  for (const dl of plasmaLines) {
    let colored = "";
    for (let i = 0; i < dl.chars.length; i++) {
      const ch = dl.chars[i];
      if (ch === " ") {
        colored += " ";
      } else {
        const g = dl.grays[i];
        colored += chalk.rgb(g, g, g)(ch);
      }
    }
    const padR = Math.max(0, CW - padL - PLASMA_W);
    lines.push(
      ML + bc("║") + " ".repeat(padL) + colored + " ".repeat(padR) + bc("║"),
    );
  }

  lines.push(staticBlock);
  return lines.join("\n");
}
