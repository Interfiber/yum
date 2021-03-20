// This program will compile all of the markdown in the site folder
// then inject some css into it to make it look better.
// The html generated is not clean, so it will not have a DOCTYPE
// at the top
const marked = require("marked");
const fs = require("fs");
const copydir = require("copy-dir");

console.log("Yum Markdown compiler");
console.log("Compiling markdown files located in recipes");
// Create folder
fs.mkdirSync("public");
fs.mkdirSync("public/recipes");
console.log("Copying css...");
fs.copyFileSync("site/css/normalize.css", "public/normalize.css");
fs.copyFileSync("site/css/skeleton.css", "public/skeleton.css");
console.log("Compiling site/index.md...");
let index = marked(fs.readFileSync("site/index.md").toString());
index += '<link rel="stylesheet" href="/skeleton.css">';
index += `<style>\nbody {\ntext-align: center;\n}a \n{\n text-decoration: none; \n }\n</style>`
fs.writeFileSync("public/index.html", index);
console.log("Compiled file site/index.md");
console.log("Copying static files...");
copydir.sync("site/static", "public/static");
const dir = fs.opendirSync('site/recipes');
let dirent
while ((dirent = dir.readSync()) !== null) {
    console.log(`Compiling file ${dirent.name}`);
    let out = marked(fs.readFileSync(`site/recipes/${dirent.name}`).toString());
    out += '<link rel="stylesheet" href="/skeleton.css">';
    out += `<style>\nbody {\ntext-align: center;\n}\na \n{\n text-decoration: none; \n }\n</style>`
    fs.writeFileSync(`public/recipes/${dirent.name.toString().replace(".md", ".html")}`, out);
    console.log(`Compiled file ${dirent.name}!`);
}
dir.closeSync();
