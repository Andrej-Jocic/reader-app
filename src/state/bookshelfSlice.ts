import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Book from '../entities/Book';
import { RootState } from '../store';
import Shelf from '../entities/Shelf';

interface ToggleBookmarkPayload {
  id: string;
}

interface CreateShelfPayload {
  shelfName: string;
  bookIds: string[];
}

interface BookshelfState {
  bookmarkedBookIds: string[];
  bookmarkedBooks: Book[];
  shelf: Shelf[];
}

const initialState: BookshelfState = {
  bookmarkedBookIds: [],
  bookmarkedBooks: [],
  shelf: [],
};

const bookshelfSlice = createSlice({
  name: 'bookshelf',
  initialState,
  reducers: {
    toggleBookmark(state, action: PayloadAction<ToggleBookmarkPayload>) {
      const index = state.bookmarkedBookIds.indexOf(action.payload.id);

      if (index === -1) {
        // If the ID is not in the array, add it
        state.bookmarkedBookIds.push(action.payload.id);
      } else {
        // If the ID is already in the array, remove it
        state.bookmarkedBookIds.splice(index, 1);
      }
    },
    toogleBook(state, action: PayloadAction<Book>) {
      const index = state.bookmarkedBooks.findIndex(
        (book) => book.id === action.payload.id
      );

      if (index === -1) {
        // If the object with the same ID doesn't exist, add it to the array
        state.bookmarkedBooks.push(action.payload);
      } else {
        // If the object with the same ID exists, remove it from the array
        state.bookmarkedBooks.splice(index, 1);
      }
    },
    createShelf(state, action: PayloadAction<CreateShelfPayload>) {
      const ids = action.payload.bookIds;
      const books = state.bookmarkedBooks.filter((book) =>
        ids.includes(book.id)
      );
      state.shelf.push({ shelfName: action.payload.shelfName, books });
    },
  },
});

export const getBookmarkedBookIds = (state: RootState) =>
  state.bookshelf.bookmarkedBookIds;

export const getIsBookmarked = (id: string) => (state: RootState) =>
  state.bookshelf.bookmarkedBookIds.includes(id);

export const getBookmarkedBooks = (state: RootState) =>
  state.bookshelf.bookmarkedBooks;

export const getBookmarkedBooksLength = (state: RootState) =>
  state.bookshelf.bookmarkedBooks.length;

export const getShelves = (state: RootState) => state.bookshelf.shelf;
export const getShelvesLength = (state: RootState) =>
  state.bookshelf.shelf.length;

export const getShelfNames = (state: RootState) =>
  state.bookshelf.shelf.map((shelf) => shelf.shelfName);

export const { toggleBookmark, toogleBook, createShelf } =
  bookshelfSlice.actions;
export default bookshelfSlice.reducer;
