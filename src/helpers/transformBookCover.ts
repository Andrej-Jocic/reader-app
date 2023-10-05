import { COVER_SIZE } from '../constants';

// Generate a link for the book cover based on the cover ID. If no cover is available for the book, it returns the 'noCover.jpg' image.
function transformBookCover(coverId: number | undefined) {
  return typeof coverId === 'number'
    ? `https://covers.openlibrary.org/b/id/${coverId}-${COVER_SIZE}.jpg`
    : '/noCover.jpg';
}

export default transformBookCover;
