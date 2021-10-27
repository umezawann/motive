import React, { useState } from 'react';
import type { NextPage } from 'next';
import Year from '@/components/templates/Year/Year';
import TaskForm from '@/components/templates/TaskForm/TaskForm';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { Divider } from '@mui/material';
import BaseLayout from '@/components/templates/Layouts/BaseLayout'

const Today: NextPage = () => {
  // const { onSubmit, tasks, tasksInYear } = useHooks();
  const today = dayjs();

  const getDay = (date: Date) => {
    return dayjs(date).format('MM月DD日');
  };
  const getWeekDay = (date: Date) => {
    return dayjs(date).get('day');
  };
  const days = Array(100)
    .fill(0)
    .map((_, i) => dayjs(today).add(i, 'day').toDate());

  return (
    <BaseLayout>
    <>
      <div>upcoming</div>
      <Stack direction="row" spacing={2}>
        {days.map((d, i) => (
          <div key={i}>
            {/* TODO: hogehogeを消すとstyleが崩れてしまう */}
            <div>hogehoge{getWeekDay(d)}</div>
            <div>{getDay(d)}</div>
          </div>
        ))}
      </Stack>

      <Stack spacing={2}>
        {days.map((d, i) => (
          <div key={i}>
            {/* TODO: この日の一言 */}
            {/* TODO: この日のタスク */}
            <div>{getWeekDay(d)}</div>
            <Divider />
          </div>
        ))}
      </Stack>
      </>
    </BaseLayout>
  );
};

export default Today;
