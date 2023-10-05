import { Params } from 'react-router-dom';
import { APIClient } from '../services/api-client';

const apiClient = new APIClient('/works');

const bookLoader = async ({ params }: { params: Params }) => {
  const book = apiClient.getBook(params);
  return book;
};

export default bookLoader;
