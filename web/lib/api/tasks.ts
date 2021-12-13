import { useApiClient } from '@/lib/api/apiClient';

const useTasksOfDay = () => {
  const { response, loading, error } = useApiClient({
    method: 'GET',
    url: '/tasks/today',
  });

  return { data: response, loading, error };
};

const useTasksInYear = (year: string) => {
  const { response, loading, error } = useApiClient({
    method: 'GET',
    url: `/tasks?year=${year}`,
  });

  return { data: response, loading, error };
};

export { useTasksOfDay, useTasksInYear };
