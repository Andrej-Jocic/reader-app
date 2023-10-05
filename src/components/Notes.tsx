import { FormEvent, useState } from 'react';

import styles from './Notes.module.css';
import Note from './Note';
import { useSelector } from 'react-redux';
import { addNote, getNotes } from '../state/bookSlice';
import { useDispatch } from '../hooks/useDispatch';
import { useParams } from 'react-router-dom';

const Notes = () => {
  const [showNotes, setShowNotes] = useState(false);
  const dispatch = useDispatch();

  const { id = '' } = useParams();

  const notesArr = useSelector(getNotes(id));
  const arr = notesArr ? notesArr[id] : [];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const note = formData.get('notes') as string;
    const page = formData.get('page') as string;

    if (note.length === 0 || page.length === 0) return;

    dispatch(addNote({ id, note, page }));

    setShowNotes((note) => !note);
  };

  return (
    <>
      <div className={styles.formContainer}>
        {!showNotes ? (
          <button
            className={styles.cta}
            onClick={() => setShowNotes((note) => !note)}
          >
            Create Notes
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              className={styles.formInput}
              rows={4}
              placeholder="Write your notes here"
            ></textarea>
            <label htmlFor="page">Page of the Book:</label>
            <input
              type="number"
              id="page"
              name="page"
              className={styles.formInput}
              placeholder="Page number"
            />
            <button type="submit" className={styles.formButton}>
              Add
            </button>
          </form>
        )}
      </div>

      {
        <ul className={styles.notesList}>
          {arr.map((note, index) => (
            <Note key={index} note={note.note} page={note.page} />
          ))}
        </ul>
      }
    </>
  );
};

export default Notes;
