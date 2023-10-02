// Accepts a book ID and removes the '/works/' prefix from it.
function transformBookID(bookId: string) {
  return bookId.replace('/works/', '');
}

export default transformBookID;
