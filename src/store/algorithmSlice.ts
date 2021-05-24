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

export interface AlgorithmState {
  queue: number[];
}

const initialState: AlgorithmState = {
  queue: []
};

export const AlgorithmSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    generateSortQueue: (state, _action: PayloadAction<null> ) => {
      const new_queue: number[] = generateQueue(10, 0, 50);
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
    }
  },
});

export const { generateSortQueue, quickSortQueue, mergeSortQueue } = AlgorithmSlice.actions;

export const getQueue = (state: RootState) => state.queue.queue;

export default AlgorithmSlice.reducer;
