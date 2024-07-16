export function binarySearch(list: number[], target: number) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    console.log("iter");

    const current = Math.floor((low + high) / 2);
    const currentElement = list[current];

    if (currentElement === target) {
      return current;
    } else if (currentElement < target) {
      low = current + 1;
    } else {
      high = current - 1;
    }
  }
  return null;
}
