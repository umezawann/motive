import React, { useState } from 'react';
import type { NextPage } from 'next';
import Year from '@/components/templates/Year/Year';
import TaskForm from '@/components/templates/TaskForm/TaskForm';
import { useHooks } from './hooks';
import BaseLayout from '@/components/templates/Layouts/BaseLayout';
import Grid from '@mui/material/Grid';

const Today: NextPage = () => {
  const { onSubmit, tasks, tasksInYear } = useHooks();

  console.log('tasks', tasks);
  return (
    <BaseLayout>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={2} sm={2} />
        <Grid item xs={8} sm={8}>
          <div>
            <div style={{ margin: 'auto' }}>本日のタスク</div>
            <TaskForm onSubmit={onSubmit} />
            {tasks && tasks.map((t) => <div key={t.id}>{t.title}</div>)}

            {tasksInYear && <Year tasks={tasksInYear} />}
          </div>
        </Grid>
        <Grid item xs={2} sm={2} />
      </Grid>
    </BaseLayout>
  );
};

export default Today;
