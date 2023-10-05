import BookDetails from '../entities/BookDetails';
import BookDetailsResponse from '../entities/BookDetailsResponse';
import sliceSubjects from './sliceSubjects';
import transformBookCover from './transformBookCover';
import transformBookID from './transformBookID';

// Processes book retrieved from the Open Library Works API and maps the keys to more friendly format

function transformBook(book: BookDetailsResponse): BookDetails {
  return {
    title: book.title,
    description:
      typeof book.description === 'string' ? book.description : undefined,
    coverImg: book.covers
      ? transformBookCover(book.covers[0])
      : transformBookCover(undefined),
    publishYear: book.first_publish_date,
    id: transformBookID(book.key),
    subjectPlaces: book.subject_places,
    subjects: book.subjects ? sliceSubjects(book.subjects) : undefined,
  };
}

export default transformBook;
