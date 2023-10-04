import { configureStore } from '@reduxjs/toolkit';
import librarySlice from './state/librarySlice';
import bookshelfSlice from './state/bookshelfSlice';

const store = configureStore({
  reducer: {
    library: librarySlice,
    bookshelf: bookshelfSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
