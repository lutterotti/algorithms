/* eslint-disable @typescript-eslint/no-unused-expressions */
import { cloneDeep } from "lodash";
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

const pivot = (arr: number[], start: number) => {
  const swap = (list: number[], a: number, b: number) => [list[a], list[b]] = [list[b], list[a]];

  let pivot = arr[start],
      pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  };
  swap(arr, start, pointer);

  return pointer;
}

export const quickSortB = (arr, start: number, end: number) => {
  let pivotIndex = pivot(arr, start);

  if (start >= end) return arr;
  quickSortB(arr, start, pivotIndex);
  quickSortB(arr, pivotIndex + 1, end);

  return arr;
};



