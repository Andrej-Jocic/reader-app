import axios, { AxiosRequestConfig, CanceledError, AxiosError } from 'axios';
import BookResponse from '../entities/BookResponse';
import transformBooks from '../helpers/transformBooks';
import { Params } from 'react-router-dom';
import transformBook from '../helpers/transformBook';

interface FetchResponse {
  docs: BookResponse[];
}

const axiosInstance = axios.create({
  baseURL: 'https://openlibrary.org',
});

class APIClient {
  constructor(public endpoint: string) {}

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

  // TODO: remove if cause problems
  getBook(params: Params<'id'>) {
    const book = axiosInstance
      .get(`${this.endpoint}/${params.id}.json`)
      .then((res) => transformBook(res.data));
    return book;
  }
}

export { APIClient };
