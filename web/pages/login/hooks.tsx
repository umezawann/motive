import axios from '@/lib/axios';
import { useTasksOfDay, useTasksInYear } from '@/lib/api/tasks';

export const useHooks = () => {
  const onSubmit = async (body: any) => {
    console.log('body', body);
    // const body = { ...values, point: 1, status: 'TODO', date: new Date() };
    // console.log('body is', body);
    const res = await axios.post('/auth/login', body);
    console.log('res is', res);
  };

  return { onSubmit};
};
