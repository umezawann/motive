import axios from '@/lib/axios';
import { useTasksOfDay, useTasksInYear } from '@/lib/api/tasks';
import { get, set } from '@/lib/storage'
import { apiClient } from '@/lib/axios'
import { useRouter } from 'next/router'
import { getRoutes } from './../../lib/routes';


export const useHooks = () => {
  const router = useRouter()

  const onSubmit = async (body: any) => {
    console.log('body', body);
    // const body = { ...values, point: 1, status: 'TODO', date: new Date() };
    // console.log('body is', body);
    const res = await apiClient.post('/auth/signup', body);
    const data: any = res.data
    const accessToken = data.access_token
    set('accessToken', accessToken)
    router.push(getRoutes('root'))
  };

  return { onSubmit};
};
