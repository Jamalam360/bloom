import { BloomFilter } from "https://raw.githubusercontent.com/Jamalam360/bloom/main/mod.ts";

// number of elements: number,
// false positive probability: number (0 - 1)
// These values are used to calculate the size of
// the bit array the Bloom filter uses
const filter = new BloomFilter(10, 0.05);

console.log(filter.toBitString());
filter.add("in filter");
console.log(filter.toBitString());

console.log(filter.check("in filter"));
console.log(filter.check("not in filter"));
