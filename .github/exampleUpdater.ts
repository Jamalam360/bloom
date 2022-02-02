let template = await Deno.readTextFile("./.github/README_TEMPLATE.md");
const example = await Deno.readTextFile("./example.ts");

template = template.replace("${EXAMPLE}", example);

if (await Deno.readTextFile("./README.md") != template) {
  await Deno.writeTextFile("./README.md", template);

  Deno.run({
    cmd:
      `git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com`
        .split(" "),
  });

  Deno.run({
    cmd: `git config --local user.name "github-actions"`
      .split(" "),
  });

  Deno.run({
    cmd: `git commit -m "[Bot] Update Example" -a`
      .split(" "),
  });
}
