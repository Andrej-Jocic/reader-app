import { RefObject, useEffect } from 'react';
import { useDispatch } from './useDispatch';
import { closeAutocomplete } from '../state/librarySlice';

function useCloseAutocomplete(ref: RefObject<HTMLUListElement>) {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClick = (e: globalThis.MouseEvent) => {
      if (
        e.target instanceof Element &&
        (e.target.nodeName === 'path' || e.target.nodeName === 'svg')
      )
        return;

      if (ref.current && !ref.current.contains(e.target as Node))
        dispatch(closeAutocomplete());
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
export default useCloseAutocomplete;
