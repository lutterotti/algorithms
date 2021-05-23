import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import algorithmReducer from './algorithmSlice';

export const store = configureStore({
  reducer: {
    queue: algorithmReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
