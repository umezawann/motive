import { useAxios } from '@/lib/axios';

export const useApiClient = ({
  method,
  url,
}: {
  method: 'GET'
  url: string;
}) => {
  const { response, loading, error } = useAxios({
    method: method,
    url: url,
  });

  return { response, loading, error };
};
