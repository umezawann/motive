import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';

interface IFormInput {
  name: string;
}

const TaskForm = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const body = {...data, point: 1, status: 'todo', date: new Date()}
    console.log(data)
    console.log('body is', body)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue="test value"
        render={({ field }) => <TextField {...field} />}
      />
      <input type="submit" />
    </form>
  );
};

export default TaskForm