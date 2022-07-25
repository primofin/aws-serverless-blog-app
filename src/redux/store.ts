import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlices';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
