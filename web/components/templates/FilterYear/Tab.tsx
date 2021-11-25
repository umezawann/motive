import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useApiClient } from "@/lib/api/apiClient";
import Task from "@/components/templates/Task/Task";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const useTasksOfDay = (year: string) => {
    console.log("iseTasksOfDay");
    const { response, loading, error } = useApiClient({
      method: "GET",
      url: `/tasks/query?year=${year}`,
    });

    return { data: response, loading, error };
  };

  // const years = ["2021", "2020", "2019", "2018"];

  // function years(index: number) {
  //   year.map((year) => {
  //     const { data: task2021 } = useTasksOfDay("2021");
  //   });
  //   return null;
  // }

  const { data: task2021 } = useTasksOfDay("2021");
  const { data: task2020 } = useTasksOfDay("2020");
  const { data: task2019 } = useTasksOfDay("2019");
  const { data: task2018 } = useTasksOfDay("2018");
  const taskInYears = [task2021, task2020, task2019, task2018];
  console.log("taskInYears", taskInYears);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="2021" {...a11yProps(0)} />
        <Tab label="2020" {...a11yProps(1)} />
        <Tab label="2019" {...a11yProps(2)} />
        <Tab label="2018" {...a11yProps(3)} />
      </Tabs>

      {taskInYears.map((year, index) => (
        <TabPanel value={value} index={index} key={index}>
          {year &&
            year.map((t) => (
              <div key={t.id}>
                <Task task={t} />
              </div>
            ))}
        </TabPanel>
      ))}
    </Box>
  );
}
