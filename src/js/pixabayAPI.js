import { api } from './config';

export const fetchImages = async (query, page = 1, limit = 20) => {
  const response = await api.get('', {
    params: {
      q: query,
      page,
      per_page: limit,
    },
  });
  return response.data;
};
