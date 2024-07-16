export function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const lower = [];
  const bigger = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lower.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }

  return [...quickSort(lower), pivot, ...quickSort(bigger)];
}
