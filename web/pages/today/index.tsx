import React, { useState } from 'react';
import type { NextPage } from 'next';
import Year from '@/components/templates/Year/Year';
import TaskForm from '@/components/templates/TaskForm/TaskForm';
import { useHooks } from './hooks';

const Today: NextPage = () => {
  const { onSubmit, tasks, tasksInYear } = useHooks();

  console.log('tasks', tasks);
  return (
    <div>
      <div>本日のタスク</div>
      <TaskForm onSubmit={onSubmit} />
      {tasks && tasks.map(t => (
        <div key={t.id}>{t.title}</div>
      ))}

      {tasksInYear && <Year tasks={tasksInYear} />}
    </div>
  );
};

export default Today;
