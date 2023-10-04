import { useEffect } from 'react';
import { APIClient } from '../services/api-client';
import { updateAutocomplete } from '../state/librarySlice';
import { useDispatch } from './useDispatch';

const apiClient = new APIClient('/search.json');

function useSearch(query: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (query.length === 0) return;

    const controller = new AbortController();

    async function fetchAutocomplete() {
      const books = apiClient.getSearchResult({
        params: { q: query, limit: 12 },
        signal: controller.signal,
      });
      const autocomplete = await books;
      autocomplete && dispatch(updateAutocomplete(autocomplete));
    }

    fetchAutocomplete();
    //const autocompleteResults = books;
    // dispatch(action())
    /* books
      .then((res) => {
        console.log(transformBooks(res.data.docs));
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        //TODO: throw error and catch it with React ROUTer
        if (err instanceof AxiosError) console.log(err.message);
      }); */

    // TODO : DISPATCH
    // TODO: separate effect for handleClick and fetch and extract it in custom hooks

    // const handleClick = (e: globalThis.MouseEvent) => {
    //   if (ref.current && !ref.current.contains(e.target as Node))
    //     setResults([]);
    // };

    // document.addEventListener('click', handleClick);

    return () => {
      controller.abort();
      //   document.removeEventListener('click', handleClick);
    };
  }, [query, dispatch]);
}

export default useSearch;
