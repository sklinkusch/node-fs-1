const fs = require("fs");

const contentJSON = fs.readFileSync("./package.json", { encoding: "utf8" });
const content = JSON.parse(contentJSON);
console.log(`name: ${content.name}`);
console.log(`version: ${content.version}`);
console.log(`number of dependencies: ${"dependencies" in content ? Object.keys(content.dependencies).length : "0"}`)
console.log(`number of devDependencies: ${"devDependencies" in content ? Object.keys(content.devDependencies).length : "0"}`)

const node_stat = fs.statSync('./node_modules');
const size = node_stat.size;
console.log(`node_modules: ${size} bytes`);