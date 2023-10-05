import Book from '../entities/Book';
import BookResponse from '../entities/BookResponse';
import transformBookCover from './transformBookCover';
import transformBookID from './transformBookID';

// Processes a list of books retrieved from the Open Library Books API and maps the keys to more friendly format
function transformBooks(books: BookResponse[]): Book[] {
  return books.map((book) => ({
    id: transformBookID(book.key),
    title: book.title,
    author: book.author_name,
    publishYear: book.first_publish_year,
    coverURL: transformBookCover(book.cover_i),
  }));
}

export default transformBooks;
