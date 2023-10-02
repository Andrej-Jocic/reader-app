import { useEffect } from 'react';
import { APIClient } from '../services/api-client';

const apiClient = new APIClient('/search.json');

function useSearch(query: string) {
  useEffect(() => {
    if (query.length === 0) return;

    const { cancle } = apiClient.getSearchResult(query);
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
      cancle();
      //   document.removeEventListener('click', handleClick);
    };
  }, [query]);
}

export default useSearch;
