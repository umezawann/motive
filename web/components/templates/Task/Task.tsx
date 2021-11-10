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
    title: string;
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

  const handleSumbit = async (id: string, values: any) => {
    console.log("handleSumbit id", id);
    // hint: web/pages/today/hooks.ts のaxios.postらへん
    const body = { ...values };
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
  handleSubmit: (id: string, values: any) => Promise<void>;
  task: {
    id: string;
    title: string;
  };
}

function FormDialog({ open, handleClose, task, handleSubmit }: FormDialogProp) {
  const [title, setTitle] = React.useState(task.title);
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
          type="email"
          fullWidth
          variant="standard"
          onChange={(event) => setTitle(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSubmit(task.id, { title: title })}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Task;
