import { useApiClient } from '@/lib/api/apiClient';

const useTasksOfDay = () => {
  const { response, loading, error } = useApiClient({
    method: 'GET',
    url: '/tasks/today',
  });

  return { data: response, loading, error };
};

const useTasksInYear = (year: string) => {
  console.log('useYasksInYear', year)
  const { response, loading, error } = useApiClient({
    method: 'GET',
    url: `/tasks/search?year=${year}`,
  });

  return { data: response, loading, error };
};

export { useTasksOfDay, useTasksInYear };
