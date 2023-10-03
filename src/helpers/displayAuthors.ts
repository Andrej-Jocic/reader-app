function dispayAuthors(authors: string[] | undefined) {
  return authors?.join(', ') || 'unknown';
}
export default dispayAuthors;
