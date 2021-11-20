import { useApiClient } from '@/lib/api/apiClient';

const useTasksOfLabel = (id: string) => {
  const { response, loading, error } = useApiClient({
    method: 'GET',
    url: `/labels/${id}`,
  });

  return { data: response, loading, error };
};

export { useTasksOfLabel};