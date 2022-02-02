import { BloomFilter } from "../mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

const bf = new BloomFilter(10, 0.05);

const present = [
  "word",
  "present",
  "bloom",
  "filter",
  "deno",
  "javascript",
  "six",
  "eight",
  "twelve",
  "vscode",
];

const absent = [
  "hate",
  "data",
  "date",
  "time",
  "east",
  "west",
];

bf.addAll(present);

Deno.test({
  name: "Test Present",
  fn(): void {
    for (let index = 0; index < present.length; index++) {
      const element = present[index];
      assertEquals(bf.check(element), true);
    }
  },
});

Deno.test({
  name: "Test Not Present",
  fn(): void {
    for (let index = 0; index < absent.length; index++) {
      const element = absent[index];
      assertEquals(bf.check(element), false);
    }
  },
});
