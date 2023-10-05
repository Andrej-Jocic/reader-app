import styles from './Note.module.css';

type NoteProps = {
  page: string;
  note: string;
};
const Note = ({ note, page }: NoteProps) => {
  return (
    <li className={styles.noteItem}>
      <p>Page: {page}</p>
      <p>{note}</p>
    </li>
  );
};

export default Note;
