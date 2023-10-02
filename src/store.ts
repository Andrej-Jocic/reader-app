import { configureStore } from '@reduxjs/toolkit';
import librarySlice from './state/librarySlice';

const store = configureStore({
  reducer: {
    library: librarySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
