let template = await Deno.readTextFile("./.github/README_TEMPLATE.md");
const example = await Deno.readTextFile("./example.ts");

template = template.replace("${EXAMPLE}", example);
await Deno.writeTextFile("./README.md", template);
