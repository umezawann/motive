import { useAxios } from '@/lib/axios';

const useApiClient = () => {
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: '/tasks/today',
  });

  return { data: response, loading, error };
}

// TODO: 後で書く
export {useApiClient}