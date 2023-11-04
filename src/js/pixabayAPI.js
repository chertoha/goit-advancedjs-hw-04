import { api } from './config';

export const fetchImages = async query => {
  const response = await api.get('', {
    params: {
      q: query,
    },
  });

  return response.data;
};
