import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Task from '@/components/templates/Task/Task';
import { useHooks } from './hooks';

interface TabPanelProps {
  children?: React.ReactNode;

  index?: string;
  value?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  console.log('TabPanel: value', value);
  console.log('TabPanel: index', index);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const hoge = () => {
  return 'hoge'
};
const VerticalTabs = ({ year, handleChange, tasks} : { year : string, handleChange: (currentYear: string) => void, tasks: any }) => {
  // const useTasksOfDay = (year: string) => {
  //   const { response, loading, error } = useApiClient({
  //     method: "GET",
  //     url: `/tasks/query?year=${year}`,
  //   });

  //   return { data: response, loading, error };
  // };

  // const years = ["2021", "2020", "2019", "2018"];

  // function years(index: number) {
  //   year.map((year) => {
  //     const { data: task2021 } = useTasksOfDay("2021");
  //   });
  //   return null;
  // }

  // const { data } = useHooks(year);
  // const { data: task2021 } = useHooks("2021");
  // const { data: task2020 } = useHooks("2020");
  // const { data: task2019 } = useHooks("2019");
  // const { data: task2018 } = useHooks("2018");
  // const taskInYears = [year];
  // console.log("taskInYears", taskInYears);

  // const [value, setValue] = React.useState(year);

  const handler = (event: React.SyntheticEvent, newValue: string) => {
    // setValue(event.target.label);
    console.log("event", event)
    // console.log("event.target.value", event.target.value)
    console.log("newValue", newValue)
    handleChange(newValue)
  };

  console.log('tasks', tasks)

  return (
    <>
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={year}
        onChange={handler}
        TabIndicatorProps={{
          style: {
            display: 'none',
          },
        }}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="2021" {...a11yProps(0)} value={'2021'}/>
        <Tab label="2020" {...a11yProps(1)} value={'2020'}/>
        <Tab label="2019" {...a11yProps(2)} value={'2019'}/>
        <Tab label="2018" {...a11yProps(3)} value={'2018'}/>
      </Tabs>

      {/* <TabPanel value={value} index={year}>
          {data &&
            data.map((t ,idx) => (
              <div key={t.id}>
                <Task task={t} />
              </div>
            ))}
        </TabPanel> */}

      {/* TODO: ここでYearコンポーネントを出せばよい */}
      {/* <div>
        <div>今までのタスクを振り返り</div>
        {tasksInYear && <Year tasks={tasksInYear} />}
      </div> */}

      { tasks &&
            tasks.map((t) => (
              <div key={t.id}>
                <Task task={t} />
              </div>
            ))
        // </TabPanel>
      }
    </Box>
    </>
  );
}

export default VerticalTabs;