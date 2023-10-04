import { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { updateBooks } from '../state/librarySlice';
import styles from './Search.module.css';
import { useDispatch } from '../hooks/useDispatch';
import useSearch from '../hooks/useSearch';
import Autocomplete from './Autocomplete';

const Search = () => {
  // State for capturing the user's current input in the Search input field.
  const [query, setQuery] = useState('');
  // Custom hook to handle autocomplete feature
  useSearch(query);

  const dispatch = useDispatch();

  // On search input submit, retrieve books from the Open Library Search API using the current `query`
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!query) return;
    dispatch(updateBooks(query));

    setQuery('');
  };

  // On search input change, capture the user's current input in the Search input field and store it to `query`.
  const handleChange = (query: string) => {
    setQuery(query);
  };

  return (
    <>
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
      <Autocomplete />
    </>
  );
};

export default Search;
