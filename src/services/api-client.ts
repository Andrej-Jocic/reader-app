import axios, { AxiosRequestConfig, CanceledError, AxiosError } from 'axios';
import BookResponse from '../entities/BookResponse';
import transformBooks from '../helpers/transformBooks';

interface FetchResponse {
  docs: BookResponse[];
}

const axiosInstance = axios.create({
  baseURL: 'https://openlibrary.org',
});

class APIClient {
  constructor(public endpoint: string) {}

  // TODO: make getSearchResult generic to return whole books and just names and ids for search dropdown...
  /* getSearchResult(query: string) {
    const controller = new AbortController();
    const books = axiosInstance
      .get<FetchResponse>(this.endpoint, {
        params: { q: query, limit: LIMIT },
        signal: controller.signal,
      })
      .then((res) => transformBooks(res.data.docs));

    return { books, cancle: () => controller.abort() };
  } */
  getSearchResult(config: AxiosRequestConfig) {
    const books = axiosInstance
      .get<FetchResponse>(this.endpoint, { ...config })
      .then((res) => transformBooks(res.data.docs))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        if (err instanceof AxiosError) throw new Error(err.message);
      });

    return books;
  }
}

export { APIClient };
