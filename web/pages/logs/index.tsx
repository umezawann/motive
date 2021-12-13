import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Year from '@/components/templates/Year/Year';
import TaskForm from '@/components/templates/TaskForm/TaskForm';
import BaseLayout from '@/components/templates/Layouts/BaseLayout';
import Grid from '@mui/material/Grid';
import { useHooks } from './hooks';
import VerticalTabs from '@/components/templates/FilterYear/Tab';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';

const Logs: NextPage = () => {
  const router = useRouter();
  const year = typeof router.query?.year === 'string' ? router.query?.year : '2020'
  const { onSubmit, tasks, tasksInYear } = useHooks(year);
  const [currentYear, setCurrentYear] = useState(2021)
  // const router = useRouter();
  // sample
  // const year = router.query?.year
  // const hoge = useTasksInYear(year)
  // console.log('year', year)
  // sample
  // useEffect(() => {
  //   console.log('useEffect is called')
  // }, [year]);

  return (
    <div>
      <BaseLayout>
        <Stack direction="row">
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={2} sm={2}>
                <button
                  type="button"
                  onClick={() => {
                    router.push({
                      pathname: '/logs',
                      query: { year: '2020' },
                    });
                  }}
                >
                  Click here to read more
                </button>
              </Grid>
              <Grid item xs={8} sm={8}>
                <div>
                  <div>今までのタスクを振り返り</div>
                  {tasksInYear && <Year tasks={tasksInYear} />}
                </div>
              </Grid>
              <Grid item xs={2} sm={2} />
            </Grid>
          </div>
          <VerticalTabs year={currentYear} handleChange={setCurrentYear} />
        </Stack>
      </BaseLayout>
    </div>
  );
};

export default Logs;
