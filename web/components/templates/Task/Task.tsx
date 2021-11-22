import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { apiClient } from "@/lib/axios";
import SubTaskFormDialog from "components/templates/SubTask";

type TaskType = {
  id: string;
  title: any;
  point: number;
  status: string;
};

type ParentTaskType = TaskType & {
  subTasks: TaskType[];
};

type TaskPropType = {
  task: ParentTaskType;
};

const Task = ({ task }: TaskPropType) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (
    id: string,
    body: { title: string; point: number }
  ) => {
    console.log("handleSubmit id", id);
    // hint: web/pages/today/hooks.ts のaxios.postらへん
    // const body = [{ ...title}, { ...point}];
    // const body = {title, point}
    console.log("body is", body);
    const res = await apiClient.post(`/tasks/${id}`, body);
    console.log("res is", res);
  };

  const subTaskSubmit = async (id: string, body: { subTask: string }) => {
    console.log("subTask id", id);
    console.log("body is", body);
    const res = await apiClient.post(`/tasks/${id}`, body);
    console.log("res is", res);
  };

  return (
    <>
      <Card onClick={handleClickOpen}>
        <CardContent>
          <div>{task.title}</div>
          <ul>
            {task.subTasks.map((sub) => (
              <div key={sub.id}>{sub.title}</div>
            ))}
          </ul>
        </CardContent>
      </Card>
      <FormDialog
        open={open}
        handleClose={handleClose}
        task={task}
        handleSubmit={handleSubmit}
        subTask={subTaskSubmit}
      />
    </>
  );
};

interface FormDialogProp {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (
    id: string,
    body: { title: any; point: number }
  ) => Promise<void>;
  task: {
    id: string;
    title: any;
    point: number;
  };
  subTask: (id: string, body: { subTask: string }) => Promise<void>;
}

function FormDialog({
  open,
  handleClose,
  task,
  handleSubmit,
  subTask,
}: FormDialogProp) {
  const [title, setTitle] = React.useState(task.title);
  const [point, setPoint] = React.useState(task.point);
  console.log("FormDialog task is", task);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <DialogContentText>{task.id}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          fullWidth
          variant="standard"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <TextField
          type="number"
          margin="dense"
          id="point"
          label="Point"
          fullWidth
          variant="standard"
          onChange={(event) => setPoint(parseInt(event.target.value))}
          value={point}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSubmit(task.id, { title, point })}>
          Save
        </Button>
      </DialogActions>
      <SubTaskFormDialog id={task.id} handleSubmit={subTask} />
    </Dialog>
  );
}

export default Task;
