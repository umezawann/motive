import { get, set } from '@/lib/storage';
import { apiClient } from '@/lib/axios';
import axios from '@/lib/axios';
import { useAxios } from '@/lib/axios';

export const useLabels = () => {
  const { response, loading } = useAxios({
    method: 'GET',
    url: '/labels',
  });

  const data = loading ? [] : response

  return {data}
};
