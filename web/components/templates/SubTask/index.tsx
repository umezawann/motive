import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface FormDialogProp {
  id: string;
  handleSubmit: (id: string, body: { subTask: string }) => Promise<void>;
}

export default function SubTaskFormDialog({
  id,
  handleSubmit,
}: FormDialogProp) {
  const [subTask, setSubTask] = React.useState<string>("");

  return (
    <>
      <DialogTitle>subTaskを作成</DialogTitle>
      <DialogContent>
        <DialogContentText>create</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="body"
          label="body"
          fullWidth
          variant="standard"
          onChange={(event) => setSubTask(event.target.value)}
          value={subTask}
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button onClick={() => handleSubmit(id, { subTask })}>Save</Button>
      </DialogActions>
    </>
  );
}
