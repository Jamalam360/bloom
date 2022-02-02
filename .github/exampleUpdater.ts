const template = await Deno.readTextFile("./.github/README_TEMPLATE.md");
const example = await Deno.readTextFile("./example.ts");

template.replace("${EXAMPLE}", example);
console.log(template);
await Deno.writeTextFile("./README.md", template);
