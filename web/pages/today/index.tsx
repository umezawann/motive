import React, { useState } from 'react';
import type { NextPage } from 'next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Year from '@/components/templates/Year/Year'
import {tasks} from '@/lib/seed'
import TaskForm from '@/components/templates/TaskForm/TaskForm'
import {useHooks} from './hooks'

const Today: NextPage = () => {
  const {onSubmit} = useHooks()
  return (
    <div>
      <div>本日のタスク</div>
      <TaskForm onSubmit={onSubmit} />
      <Year tasks={tasks} />
    </div>
  );
};

export default Today;
