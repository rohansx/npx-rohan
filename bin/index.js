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
  intro:
    "I am Rohan, your friendly neighborhood coder, focused on helping future developers be better!",
  work: "Associate Software Developer at OpenXYZ",
  twitter: "https://twitter.com/rohaxyz",
  github: "https://github.com/rohansx",
  linkedin: "https://linkedin.com/in/rohansx",
  web: "https://rohan.sh",
};

const label = (title) => chalk.bgWhite.black.bold(` ${title} `);
const url = (url, color) => chalk[color].underline(url);
const line = (label, content, color = "white") =>
  `${label}  ${chalk[color](content)}`;

const output = [
  data.intro,
  "",
  line(label("Work"), data.work),
  line(label("Twitter"), url(data.twitter, "cyan")),
  line(label("GitHub"), url(data.github, "green")),
  line(label("LinkedIn"), url(data.linkedin, "blue")),
  line(label("Web"), url(data.web, "cyan")),
].join("\n");

console.log(chalk.white(boxen(output, options)));
