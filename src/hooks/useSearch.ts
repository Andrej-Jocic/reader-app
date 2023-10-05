import { useEffect } from 'react';
import { LIMIT } from '../constants';
import searchService from '../services/search-service';
import { updateAutocomplete } from '../state/librarySlice';
import { useDispatch } from './useDispatch';

// Custom hook that handle autocomplete feature
function useSearch(query: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (query.length === 0) return;

    const controller = new AbortController();

    async function fetchAutocomplete() {
      const books = searchService.getSearchResult({
        params: { q: query, limit: LIMIT },
        signal: controller.signal,
      });
      const autocomplete = await books;
      autocomplete && dispatch(updateAutocomplete(autocomplete));
    }
    fetchAutocomplete();

    return () => {
      controller.abort();
    };
  }, [query, dispatch]);
}

export default useSearch;
