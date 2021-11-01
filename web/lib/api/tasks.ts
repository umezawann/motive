import { useAxios } from '@/lib/axios';

const useTasksOfDay = () => {
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: '/tasks/today',
  });

  return { data: response, loading, error };
};

const useTasksInYear = () => {
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: '/tasks',
  });

  return { data: response, loading, error };
};

export { useTasksOfDay, useTasksInYear };
