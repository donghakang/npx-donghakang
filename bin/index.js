#! /usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
// const boxen = require("boxen");

const options = {
  padding: 7,
  margin: 7,
  borderStyle: "double",
  float: "center",
  borderColor: "#03a9f4",
  backgroundColor: "black",
};

const data = {
  name: chalk.white.bold("                      D O N G H A K A N G"),
  intro: chalk.white(
    "Hello, World👋🏻\nI am Frontend Developer who focus a lot on Users Experience.\nI am interested in Beautify of interaction and would love to work together!\nFeel free to contact me"
  ),
  work: chalk.white("FE Developer @Seoul Nation University Hospital"),
  mail: chalk.white("dkang0602@gmail.com"),
  github: chalk.white("https://github.com/donghakang"),
  linkedin: chalk.white("www.linkedin.com/in/dkang0602"),
  instagram: chalk.white("https://www.instagram.com/donghakang/"),
  web: chalk.white("https://donghakang.github.io/"),

  //   labelOpenSource: chalk.rgb(128, 255, 128).bold("Open Source:"),
  labelWork: chalk.rgb(255, 0, 0).bold("       Work:"),
  labelTwitter: chalk.rgb(51, 51, 255).bold("    Twitter:"),
  labelGitHub: chalk.rgb(253, 245, 5).bold("     GitHub:"),
  labelLinkedIn: chalk.rgb(0, 255, 255).bold("   LinkedIn:"),
  labelYoutube: chalk.rgb(255, 25, 25).bold("    Youtube:"),
  labelInstagram: chalk.rgb(153, 102, 204).bold("  Instagram:"),
  labelMail: chalk.rgb(191, 255, 179).bold("       Mail:"),
  labelMedium: chalk.rgb(102, 51, 0).bold("     Medium:"),
  labelWeb: chalk.rgb(255, 136, 77).bold("        Web:"),
  labelCard: chalk.rgb(240, 13, 240).bold("       Card:"),
};

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = "\n";
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const webing = `${data.labelWeb}  ${data.web}`;
const mailing = `${data.labelMail}  ${data.mail}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const instagraming = `${data.labelInstagram}  ${data.instagram}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const introduction = `${data.intro}`;

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output = [
  heading,
  newline,
  introduction,
  newline,
  working,
  webing,
  githubing,
  mailing,
  linkedining,
  instagraming,
  newline,
].join(newline);

console.log(chalk.green(boxen(output, options)));
