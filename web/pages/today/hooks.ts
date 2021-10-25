import axios, {useAxios} from '@/lib/axios';

const useTasksOfDay = () => {
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: '/tasks/today',
  });

  return {data: response, loading, error}
}

const useTasksInYear = () => {
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: '/tasks',
  });

  return {data: response, loading, error}
}

export const useHooks = () => {
  const {data} =  useTasksOfDay()
  const {data: tasksInYear} =  useTasksInYear()
  const onSubmit = async (values: any) => {
    console.log('values', values);
    const body = { ...values, point: 1, status: 'TODO', date: new Date() };
    console.log('body is', body);
    const res = await axios.post('/tasks', body)
    console.log('res is', res)
  };


  return { onSubmit, tasks: data, tasksInYear };
};
