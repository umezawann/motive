import axios from '@/lib/axios';

export const useHooks = () => {
  const onSubmit = async (values: any) => {
    console.log('values', values);
    const body = { ...values, point: 1, status: 'todo', date: new Date() };
    console.log('body is', body);
    const res = await axios.get('/')
    console.log('res is', res)
  };

  return { onSubmit };
};
