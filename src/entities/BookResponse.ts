interface BookResponse {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: number | undefined;
}

export default BookResponse;
