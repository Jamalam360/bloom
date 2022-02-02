import { murmurhash3_32_gc as hash } from "./murmur.ts";

export class BloomFilter {
  fpProbability: number;
  size: number;
  hashCount: number;
  bitArray: number[];

  constructor(items_count: number, fpProbability: number) {
    this.fpProbability = fpProbability;
    this.size = BloomFilter.getSize(items_count, fpProbability);
    this.hashCount = BloomFilter.getHashCount(this.size, items_count);
    this.bitArray = Array(this.size).fill(0);
  }

  public add(item: string): void {
    const digests = [];

    for (let i = 0; i < this.hashCount; i++) {
      const digest = hash(item, i) % this.size;
      digests.push(digest);
      this.bitArray[digest] = 1;
    }
  }

  public addAll(items: string[]): void {
    items.forEach((i) => this.add(i));
  }

  public check(item: string): boolean {
    for (let i = 0; i < this.hashCount; i++) {
      const digest = hash(item, i) % this.size;
      if (this.bitArray[digest] == 0) {
        return false;
      }
    }
    return true;
  }

  public static getSize(n: number, p: number): number {
    return Math.trunc(-(n * Math.log(p)) / Math.log(2) ** 2);
  }

  public static getHashCount(m: number, n: number): number {
    return Math.trunc((m / n) * Math.log(2));
  }

  public toBitString(): string {
    return this.bitArray.toString();
  }
}
