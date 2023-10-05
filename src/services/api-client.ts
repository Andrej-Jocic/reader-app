import axios, { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';
import { Params } from 'react-router-dom';
import BookResponse from '../entities/BookResponse';
import transformBook from '../helpers/transformBook';
import transformBooks from '../helpers/transformBooks';

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

  getBook(params: Params<'id'>) {
    const book = axiosInstance
      .get(`${this.endpoint}/${params.id}.json`)
      .then((res) => transformBook(res.data));
    return book;
  }
}

function create(endpoint: string) {
  return new APIClient(endpoint);
}
export default create;
