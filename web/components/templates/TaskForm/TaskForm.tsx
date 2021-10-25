import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface TaskFormProps {
  onSubmit: (values: any) => void;
}

interface IFormInput {
  name: string;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const { control, handleSubmit } = useForm<IFormInput>();

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

export default TaskForm;
