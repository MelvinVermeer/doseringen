const fs = require("fs");

const markdownFiles = fs
  .readdirSync("./src/data/")
  .filter((f) => f.toLowerCase().endsWith(".md"))
  .map((f) => f.replace(".md", ""))
  .map((f) => {
    const content = fs.readFileSync(`./src/data/${f}.md`, "utf-8");
    const title = content.split("\n")[0].replace("# ", "");
    return {
      url: f.toLowerCase(),
      title: title,
      content,
    };
  });

fs.writeFileSync("./src/data/generated.json", JSON.stringify(markdownFiles));
