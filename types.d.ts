export type ArraysDiff<T> = {
  added: T[]
  removed: T[]
}

/**
 * Given two arrays (`oldArray` and `newArray`), returns an object with the
 * elements that were added and removed.
 * The order of the elements in the returned `added` and `removed` arrays isn't
 * guaranteed to be the same as the order in the `newArray`.
 *
 * Example: adding a `4` and removing a `1` from `[1, 2, 3]`.
 *
 * ```ts
 * const diff = arraysDiff([1, 2, 3], [2, 3, 4])
 * // { added: [4], removed: [1] }
 * ```
 *
 * Example: adding two `'B'` to `['A']`.
 *
 * ```ts
 * const diff = arraysDiff(['A'], ['A', 'B', 'B'])
 * // { added: ['B', 'B'], removed: [] }
 * ```
 *
 * @param oldArray the old array
 * @param newArray the new array, where the changes are made
 */
export function arraysDiff<T>(oldArray: T[], newArray: T[]): ArraysDiff<T>
