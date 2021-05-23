import { Item } from "../store/algorithmSlice";

export function generateRandomNumberInterval(min: number, max: number ) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateQueue(length: number, min: number, max: number) {
  const start_new_queue = new Array(length).fill('');
  const filled_new_queue: number[] = start_new_queue.map(() => {
    const value = generateRandomNumberInterval(min, max);
    return value;
  });

  return filled_new_queue;
}

export function mergeSort(queue: Item[]): Item[] {
  return queue;
}

const pivot = (queue: number[], start: number) => {
  const swap = (list: number[], a: number, b: number) => [list[a], list[b]] = [list[b], list[a]];

  let pivot = queue[start],
      pointer = start;

  for (let i = start; i < queue.length; i++) {
    if (queue[i] < pivot) {
      pointer++;
      swap(queue, pointer, i);
    }
  };
  swap(queue, start, pointer);

  return pointer;
}

export const quickSortB = (queue: number[], start: number, end: number) => {
  let pivotIndex = pivot(queue, start);

  if (start >= end) return queue;
  quickSortB(queue, start, pivotIndex);
  quickSortB(queue, pivotIndex + 1, end);

  return queue;
};



