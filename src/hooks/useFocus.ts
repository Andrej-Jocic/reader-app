import { RefObject, useEffect } from 'react';

// Focus `<input/>` element on component mount
function useFocus(ref: RefObject<HTMLInputElement>) {
  useEffect(() => {
    if (ref.current !== null) ref.current.focus();
  }, [ref]);
}

export default useFocus;
