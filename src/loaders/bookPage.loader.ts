import { Params } from 'react-router-dom';
import bookService from '../services/book-service';

// Retrieve book data from the Open Library Works API when the `BookPage` component loads.
const bookLoader = async ({ params }: { params: Params }) => {
  const book = bookService.getBook(params);
  return book;
};

export default bookLoader;
