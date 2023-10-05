import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Note = {
  id: string;
  note: string;
  page: string;
};

type InitialState = {
  // The book id serves as the key that holds an array of notes associated with a specific book.
  notes: { [key: string]: Note[] }[];
};

const initialState: InitialState = {
  notes: [],
};

// TODO: add the `done` feture
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      const matchingItem = state.notes.find((note) =>
        Object.keys(note).includes(action.payload.id)
      );
      const note = {
        note: action.payload.note,
        page: action.payload.page,
        id: action.payload.id,
      };
      if (matchingItem) {
        matchingItem[action.payload.id].push(note);
      } else {
        state.notes.push({
          [action.payload.id]: [note],
        });
      }
    },
  },
});

export const getNotes = (id: string) => (state: RootState) =>
  state.book.notes.find((note) => note[id]);

export const { addNote } = bookSlice.actions;
export default bookSlice.reducer;
