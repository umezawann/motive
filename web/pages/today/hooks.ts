export const useHooks = () => {
  const onSubmit = (values: any) => {
    console.log('values', values);
    const body = { ...values, point: 1, status: 'todo', date: new Date() };
    console.log('body is', body);
  };

  return { onSubmit };
};
