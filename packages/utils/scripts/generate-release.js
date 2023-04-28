const fs = require("fs");
const path = require("path");
const semver = require("semver");

if (process.argv.length !== 3) {
  throw new Error("Enter the tag as the second argument");
}

const tag = process.argv[2].slice(1);

if (!semver.valid(tag)) {
  throw new Error("Tag invalid");
}

const file = fs.readFileSync(path.join(__dirname, "..", "CHANGELOG.md"), {
  encoding: "utf-8"
});

const content = file
  .split(/^#\s/gm)
  .map((content) => content.trim())
  .filter(Boolean);

const changelog = content[0];

const isSameVersion = changelog.match(new RegExp(`${tag}\n`, "gm"));

if (!isSameVersion) {
  throw new Error("Incorrect CHANGELOG");
}

console.log("# " + changelog);
