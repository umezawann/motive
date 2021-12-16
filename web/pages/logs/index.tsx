import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Year from "@/components/templates/Year/Year";
import TaskForm from "@/components/templates/TaskForm/TaskForm";
import BaseLayout from "@/components/templates/Layouts/BaseLayout";
import Grid from "@mui/material/Grid";
import { useHooks } from "./hooks";
import VerticalTabs from "@/components/templates/FilterYear/Tab";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useTasksOfDay, useTasksInYear } from "@/lib/api/tasks";

const Logs: NextPage = () => {
  const router = useRouter();
  const year =
    typeof router.query?.year === "string" ? router.query?.year : "2020";
  const { onSubmit, tasks, tasksInYear } = useHooks(year);
  console.log("year", year)
  const handleChange = (currentYear: number) => {
    router.push({
      pathname: "/logs",
      query: { year: currentYear },
    });
    console.log("currentYear", currentYear);
  };

  const hoge = (arg: number) => {
    console.log("hoge", arg);
  };
  const hoge2 = (arg: number, arg2: number) => {
    console.log("hoge2", arg);
  };
  const hoge3 = ({ arg }: { arg: number }) => {
    console.log("hoge3", arg);
  };
  const hoge4 = ({ arg, arg2 }: { arg: number; arg2: number }) => {
    console.log("hoge4", arg);
  };

  hoge(10);
  hoge2(20, 21);
  hoge3({ arg: 300 });
  hoge4({ arg: 400, arg2: 401 });
  console.log('tasksInYear', tasksInYear)
  return (
    <div>
      <BaseLayout>
        <Stack direction="row">
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={2} sm={2}>
                <button
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
          <VerticalTabs
            year={year}
            handleChange={handleChange}
            tasks={tasksInYear}
          />
        </Stack>
      </BaseLayout>
    </div>
  );
};

export default Logs;
