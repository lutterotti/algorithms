import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk, store } from './store';
import { generateQueue, quickSortB } from '../utils/util-functions';
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
      const clone = cloneDeep(action.payload);
      const sorted_queue: number[] = quickSortB(clone, 0, clone.length).filter((value: number) => !isNil(value));
      return {...state, queue: sorted_queue}
    }
  },
});

export const { generateSortQueue, quickSortQueue } = AlgorithmSlice.actions;

export const getQueue = (state: RootState) => state.queue.queue;

export default AlgorithmSlice.reducer;
