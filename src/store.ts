import { configureStore } from '@reduxjs/toolkit';
import librarySlice from './state/librarySlice';
import bookshelfSlice from './state/bookshelfSlice';
import bookSlice from './state/bookSlice';

const store = configureStore({
  reducer: {
    library: librarySlice,
    bookshelf: bookshelfSlice,
    book: bookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
