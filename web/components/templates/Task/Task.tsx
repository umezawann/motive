import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
  const handleSumbit = (values) => {
    console.log('handleSumbit', values);
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
  handleSubmit: (values: any) => Promise<void>;
  task: {
    id: string;
    title: string;
  };
}

function FormDialog({ open, handleClose, task, handleSubmit }: FormDialogProp) {
  const [title, setTitle] = React.useState(task.title);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
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
        <Button onClick={() => handleSubmit({ title: title })}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Task;
