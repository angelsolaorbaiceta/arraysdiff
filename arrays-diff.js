import { makeCountMap, mapsDiff } from './maps.js'

/**
 * Given two arrays, it returns the items that have been added to the new array
 * and the items that have been removed from the old array.
 *
 * @param {any[]} oldArray the old array
 * @param {any[]} newArray the new array
 * @returns {{added: any[], removed: any[]}}
 */
export function arraysDiff(oldArray, newArray) {
  const oldsCount = makeCountMap(oldArray)
  const newsCount = makeCountMap(newArray)
  const diff = mapsDiff(oldsCount, newsCount)

  // Added items repeated as many times as they appear in the new array
  const added = diff.added.flatMap((key) => Array(newsCount.get(key)).fill(key))

  // Removed items repeated as many times as they appeared in the old array
  const removed = diff.removed.flatMap((key) =>
    Array(oldsCount.get(key)).fill(key),
  )

  // Updated items have to check the difference in counts
  for (const key of diff.updated) {
    const oldCount = oldsCount.get(key)
    const newCount = newsCount.get(key)
    const delta = newCount - oldCount

    if (delta > 0) {
      added.push(...Array(delta).fill(key))
    } else {
      removed.push(...Array(-delta).fill(key))
    }
  }

  return {
    added,
    removed,
  }
}
