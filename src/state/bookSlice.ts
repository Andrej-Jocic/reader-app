import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ToggleDonePayload {
  id: string;
}

type Note = {
  id: string;
  note: string;
  page: string;
};

type InitialState = {
  // The book id serves as the key that holds an array of notes associated with a specific book.
  notes: { [key: string]: Note[] }[];
  doneBooks: string[];
};

const initialState: InitialState = {
  notes: [],
  doneBooks: [],
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
    toggleDone(state, action: PayloadAction<ToggleDonePayload>) {
      const index = state.doneBooks.indexOf(action.payload.id);

      if (index === -1) {
        // If the ID is not in the array, add it
        state.doneBooks.push(action.payload.id);
      } else {
        // If the ID is already in the array, remove it
        state.doneBooks.splice(index, 1);
      }
    },
  },
});

export const getNotes = (id: string) => (state: RootState) =>
  state.book.notes.find((note) => note[id]);

export const getIsDone = (id: string) => (state: RootState) =>
  state.book.doneBooks.includes(id);

export const { addNote, toggleDone } = bookSlice.actions;
export default bookSlice.reducer;
