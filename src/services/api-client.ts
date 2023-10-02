import axios from 'axios';
import BookResponse from '../entities/BookResponse';
import transformBooks from '../helpers/transformBooks';

const LIMIT = 12;

interface FetchResponse {
  docs: BookResponse[];
}

const axiosInstance = axios.create({
  baseURL: 'https://openlibrary.org',
});

class APIClient {
  constructor(public endpoint: string) {}

  getSearchResult(query: string) {
    const controller = new AbortController();
    const books = axiosInstance
      .get<FetchResponse>(this.endpoint, {
        params: { q: query, limit: LIMIT },
        signal: controller.signal,
      })
      .then((res) => transformBooks(res.data.docs));

    return { books, cancle: () => controller.abort() };
  }
}

export { APIClient };
export { AxiosError, CanceledError } from 'axios';
