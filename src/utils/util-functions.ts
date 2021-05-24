import { Item } from "../store/algorithmSlice";
const INCREMENT_ONE = 1;

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

function _merge(left_queue: number[], right_queue: number[]) {
  let result_array = [];
  let left_index = 0;
  let right_index = 0;

  while(left_index < left_queue.length && right_index < right_queue.length) {
    if (left_queue[left_index] < right_queue[right_index]) {
      result_array = result_array.concat(left_queue[left_index]);
      left_index = left_index + INCREMENT_ONE;
    } else {
      result_array = result_array.concat(right_queue[right_index]);
      right_index = right_index + INCREMENT_ONE;
    }
  }

  const left_remaining = left_queue.slice(left_index);
  const right_remaining = right_queue.slice(right_index);
  return result_array.concat(left_remaining).concat(right_remaining);
}

// best O(nlogn) worst O(nlogn);
export function mergeSort(queue: number[]): number[] {

  if (queue.length <= 1) {
    return queue;
  }

  const middle_of_queue = Math.floor(queue.length / 2);
  const left_side = queue.slice(0, middle_of_queue);
  const right_side = queue.slice(middle_of_queue);

  return _merge(mergeSort(left_side), mergeSort(right_side));
}

const _pivot = (queue: number[], start: number) => {
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

// average is O(n log n) worse is O(n^2)
export const quickSort = (queue: number[], start: number, end: number) => {
  let pivotIndex = _pivot(queue, start);

  if (start >= end) return queue;
  quickSort(queue, start, pivotIndex);
  quickSort(queue, pivotIndex + 1, end);

  return queue;
};



