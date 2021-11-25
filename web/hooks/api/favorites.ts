import { useAxios } from '@/lib/axios';

export const useFavorites = () => {
  const { response, loading } = useAxios({
    method: 'GET',
    url: '/favorites',
  });

  const data = loading ? [] : response;

  return { data };
};
