import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk, store } from './store';
import { generateQueue, mergeSort, quickSort } from '../utils/util-functions';
import { cloneDeep, isNil } from 'lodash';


export enum SortType {
  MERGE = 'merge',
  QUICK = 'quick',
  PRIORITY = 'priority'
}

export enum SearchType {
  BINARY = 'binary',
  DEPTH = 'depth',
  BREADTH = 'breadth'
}

export interface Item {
  value: number;
  age: number;
}

export interface QueueOptions {
  length_of_queue: number;
  min_value: number;
  max_value: number;
}

export interface AlgorithmState {
  queue: number[];
  options: QueueOptions;
}

const initialState: AlgorithmState = {
  queue: [],
  options: {
    length_of_queue: 20,
    min_value: 0,
    max_value: 120
  }
};

export const AlgorithmSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    generateSortQueue: (state, _action: PayloadAction<null> ) => {
      const { length_of_queue, min_value, max_value } = state.options;
      const new_queue: number[] = generateQueue(length_of_queue, min_value, max_value);
      return {...state, queue: new_queue}
    },
    quickSortQueue: (state: AlgorithmState, action: PayloadAction<number[]>) => {
      const cloned_queue = cloneDeep(action.payload);
      const sorted_queue: number[] = quickSort(cloned_queue, 0, cloned_queue.length).filter((value: number) => !isNil(value));
      return {...state, queue: sorted_queue}
    },
    mergeSortQueue: (state: AlgorithmState, action: PayloadAction<number[]>) => {
      const cloned_queue = cloneDeep(action.payload);
      const sorted_queue = mergeSort(cloned_queue);

      return {...state, queue: sorted_queue};
    },
    updateQueueOptions: (state: AlgorithmState, action: PayloadAction<QueueOptions>) => {
      const { length_of_queue, min_value, max_value } = action.payload;
      const default_length_of_queue = state.options.length_of_queue;
      const default_min_value = state.options.min_value;
      const default_max_value = state.options.max_value;

      return {...state, options: {
        length_of_queue: length_of_queue ? length_of_queue : default_length_of_queue,
        min_value: min_value ? min_value : default_min_value,
        max_value: max_value ? max_value : default_max_value
      }}
    }
  },
});

export const { generateSortQueue, quickSortQueue, mergeSortQueue, updateQueueOptions } = AlgorithmSlice.actions;

export const getQueue = (state: RootState) => state.queue.queue;
export const getQueueOptions = (state: RootState) => state.queue.options;

export default AlgorithmSlice.reducer;
