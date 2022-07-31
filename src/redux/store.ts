import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlices';
import authReducer from './slices/authSlice';
import postReducer from './slices/postSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    post: postReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
