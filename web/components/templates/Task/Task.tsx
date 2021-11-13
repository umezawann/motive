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
import { apiClient } from '@/lib/axios'

interface TaskProp {
  task: {
    id: string;
    title: any;
    point: number;
  };
}

const Task = ({ task }: TaskProp) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSumbit = async (id: string, body: {title: string, point: number}) => {
    console.log("handleSumbit id", id);
    // hint: web/pages/today/hooks.ts のaxios.postらへん
    // const body = [{ ...title}, { ...point}];
    // const body = {title, point}
    console.log('body is',body)
    const res = await apiClient.post(`/tasks/${id}`, body)
    console.log("res is", res);
  };

  return (
    <>
      <Card onClick={handleClickOpen}>
        <CardContent>
          <div>{JSON.stringify(task)}</div>
        </CardContent>
      </Card>
      <FormDialog
        open={open}
        handleClose={handleClose}
        task={task}
        handleSubmit={handleSumbit}
      />
    </>
  );
};

interface FormDialogProp {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (id: string, title: any, point: string,) => Promise<void>;
  task: {
    id: string;
    title: any;
    point: string;
  };
}

function FormDialog({ open, handleClose, task, handleSubmit }: FormDialogProp) {
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
          type='number'
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
        <Button onClick={() => handleSubmit(task.id, { title, point },)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Task;
