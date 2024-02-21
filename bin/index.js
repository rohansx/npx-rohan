#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = {
  padding: 1,
  width: 60,
  title: "Hello there!",
  titleAlignment: "center",
  borderStyle: "single",
  borderColor: "#008080",
};

const data = {
  intro: chalk.white.bold(
    "I am Rohan, your friendly neighborhood coder, focused on helping future developers be better!"
  ),
  work: chalk.white("Associate Software Developer") + chalk.blue("OpenXYZ"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("rohaxyz"),
  github: chalk.gray("https://github.com/") + chalk.green("rohansx"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("rohansx"),
  //   youtube: chalk.gray("https://youtube.com/") + chalk.red("@rohansx"),
  web: chalk.cyan.underline("https://rohan.sh"),
  labelWork: chalk.bgWhite.black.bold("       Work"),
  labelTwitter: chalk.bgWhite.black.bold("    Twitter"),
  labelGitHub: chalk.bgWhite.black.bold("     GitHub"),
  labelLinkedIn: chalk.bgWhite.black.bold("   LinkedIn"),
  labelYouTube: chalk.bgWhite.black.bold("   YouTube"),
  labelWeb: chalk.bgWhite.black.bold("        Web"),
};

const newline = "\n";
const introduction = `${data.intro}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const youtubing = `${data.labelYouTube}  ${data.youtube}`;
const webing = `${data.labelWeb}  ${data.web}`;

const output =
  introduction +
  newline +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  youtubing +
  newline +
  webing;

console.log(chalk.white(boxen(output, options)));
