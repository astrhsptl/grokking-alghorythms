function findSmallest<T>(arr: T[]): number {
  let smallestIndex = 0;
  let smallest = arr[smallestIndex];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallestIndex = i;
      smallest = arr[smallestIndex];
    }
  }

  return smallestIndex;
}

export function selectionSort<T>(arr: T[]) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const smallest = findSmallest(arr);
    newArray.push(arr.splice(smallest, 1)[0]);
  }

  return newArray;
}
