import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface TaskFormProps {
  onSubmit: (values: any) => Promise<void>;
}

interface IFormInput {
  title: string;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const { control, handleSubmit } = useForm<IFormInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue="test value"
        render={({ field }) => <TextField {...field} />}
      />
      <input type="submit" />
    </form>
  );
};

export default TaskForm;
