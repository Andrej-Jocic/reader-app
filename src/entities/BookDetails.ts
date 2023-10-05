interface BookDetails {
  title: string;
  description?: string;
  coverImg: string;
  publishYear: string;
  id: string;
  subjectPlaces: string[];
  subjects?: string[];
}
export default BookDetails;
