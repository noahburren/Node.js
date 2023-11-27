const fs = require("fs");

const filePath = process.argv[2];

const fileContents = fs.readFileSync(filePath);

const fileContentsString = fileContents.toString();

const numberOfNewlines = fileContentsString.split("\n").length - 1;

console.log(numberOfNewlines);
