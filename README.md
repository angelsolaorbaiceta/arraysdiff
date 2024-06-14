# Diff Between Arrays

Given two arrays, it finds the items that were added and removed.

## Installation

```bash
$ npm install diff-between-arrays
```

## Usage

Example: adding a `4` and removing a `1` from `[1, 2, 3]`.

```ts
const diff = arraysDiff([1, 2, 3], [2, 3, 4])
// { added: [4], removed: [1] }
```

Example: adding two `'B'` to `['A']`.

```ts
const diff = arraysDiff(['A'], ['A', 'B', 'B'])
// { added: ['B', 'B'], removed: [] }
```
