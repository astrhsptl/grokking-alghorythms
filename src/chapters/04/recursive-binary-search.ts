export function binarySearch(
  list: number[],
  target: number,
  low: number = 0,
  high: number = 0
) {
  if (high === 0) high = list.length - 1;
  if (low > high) return null;

  const currentIndex = Math.floor((low + high) / 2);
  const currentElement = list[currentIndex];

  if (currentElement === target) return currentIndex;

  if (currentElement < target) {
    return binarySearch(list, target, currentIndex + 1, high);
  }

  return binarySearch(list, target, low, currentIndex - 1);
}
