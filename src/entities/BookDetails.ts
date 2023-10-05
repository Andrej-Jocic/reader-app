interface BookDetails {
  title: string;
  description?: string;
  coverImg: string; // number[]
  publishYear: string; // first_publish_date: string
  id: string; // key: "/works/OL362427W"
  subjectPlaces: string[]; // subject_places: string[]
  subjects?: string[]; // subjects: (101) slice to 10
}
export default BookDetails;
