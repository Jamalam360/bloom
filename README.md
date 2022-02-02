# Bloom

Bloom is an implementation of a
[Bloom filter](https://en.wikipedia.org/wiki/Bloom_filter) for
[Deno](https://deno.land). It uses the algoritihm detailed at
[GeeksForGeeks](https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/).

> A Bloom filter is a space-efficient probabilistic data structure, conceived by
> Burton Howard Bloom in 1970, that is used to test whether an element is a
> member of a set. False positive matches are possible, but false negatives are
> not – in other words, a query returns either "possibly in set" or "definitely
> not in set". Elements can be added to the set, but not removed (though this
> can be addressed with the counting Bloom filter variant); the more itemsvalue
> added, the larger the probability of false positives.

(Source: Wikipedia)

This module provides a standard, 'vanilla', Bloom filter implementation, as well
as the couting varaint (as mentioned above).

Example:

```ts
${EXAMPLE}
```

The above example is pulled from the main branch using GitHub Actions.
