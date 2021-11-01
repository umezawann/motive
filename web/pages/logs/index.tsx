import React, { useState } from 'react';
import type { NextPage } from 'next';
import Year from '@/components/templates/Year/Year';
import TaskForm from '@/components/templates/TaskForm/TaskForm';
import BaseLayout from '@/components/templates/Layouts/BaseLayout';
import Grid from '@mui/material/Grid';
import { useHooks } from './hooks';

const Logs: NextPage = () => {
  const { onSubmit, tasks, tasksInYear } = useHooks();

  return (
    <BaseLayout>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={2} sm={2} />
        <Grid item xs={8} sm={8}>
        <div>
          <div>今までのタスクを振り返り</div>
            {tasksInYear && <Year tasks={tasksInYear} />}
          </div>
        </Grid>
        <Grid item xs={2} sm={2} />
      </Grid>
    </BaseLayout>
  );
};

export default Logs;
