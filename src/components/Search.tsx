import { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { updateBooks } from '../state/librarySlice';
import { AppDispatch } from '../store';
import styles from './Search.module.css';

const Search = () => {
  // State for capturing the user's current input in the Search input field.
  const [query, setQuery] = useState('');

  // TODO: refactor dispatch
  const dispatch = useDispatch<AppDispatch>();

  // On search input submit, retrieve books from the Open Library Search API using the current `query`
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!query) return;
    dispatch(updateBooks(query));

    setQuery('');
  };

  // On change, capture the user's current input in the Search input field and store it to `query`.
  const handleChange = (query: string) => {
    setQuery(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <input
          className={styles.search}
          type="text"
          placeholder="Explore library"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">
          <FaSearch size={20} color="#00c46a" />
        </button>
      </div>
    </form>
  );
};

export default Search;
