import axios from '@/lib/axios';
import { useTasksOfDay, useTasksInYear } from '@/lib/api/tasks';
import { get, set } from '@/lib/storage'
import { apiClient } from '@/lib/axios'

export const useHooks = () => {
  const onSubmit = async (body: any) => {
    const res = await apiClient.post('/auth/login', body);
    const data: any = res.data
    const accessToken = data.access_token
    set('accessToken', accessToken)
  };

  return { onSubmit};
};
