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

interface FormDialogProp {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (
    body: { name: string; color: string }
  ) => Promise<void>;
}

export default function LabelFormDialog({ open, handleClose, handleSubmit }: FormDialogProp) {
  const [name, setName] = React.useState<null | string>(null);
  const [color, setColor] = React.useState<null | string>(null);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create</DialogTitle>
      <DialogContent>
        <DialogContentText>labelを作成</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="name"
          fullWidth
          variant="standard"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        {/* <TextField
          type="number"
          margin="dense"
          id="color"
          label="color"
          fullWidth
          variant="standard"
          onChange={(event) => setColor(parseInt(event.target.value))}
          value={color}
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSubmit({ name, color })}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
