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
import EditIcon from "@mui/icons-material/Edit";
import { apiClient } from "@/lib/axios";

type LabelType = {
  id: string;
  name: string;
  color: string;
};
type LabelPropType = {
  label: LabelType;
};

const Label = ({ label }: LabelPropType) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (
    id: string,
    body: { name: string; color: string }
  ) => {
    console.log("labelBody is", body);
    const res = await apiClient.post(`/labels/${id}`, body);
  };

  return (
    <>
      <Card onClick={handleClickOpen} sx={{ p: 2}}>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "7px",
              }}
            >
              <EditIcon />
            </div>
            <div style={{ lineHeight: "38px" }}>編集する</div>
          </div>
        </CardContent>
      </Card>
      <FormDialog
        open={open}
        handleClose={handleClose}
        label={label}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

interface FormDialogProp {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (
    id: string,
    body: { name: string; color: string }
  ) => Promise<void>;
  label: {
    id: string;
    name: string;
    color: string;
  };
}

function FormDialog({
  open,
  handleClose,
  label,
  handleSubmit,
}: FormDialogProp) {
  const [name, setName] = React.useState<string>(label.name);
  const [color, setColor] = React.useState<string>(label.color);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <DialogContentText>{label.id}</DialogContentText>
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
        <TextField
          type="text"
          margin="dense"
          id="color"
          label="color"
          fullWidth
          variant="standard"
          onChange={(event) => setColor(event.target.value)}
          value={color}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSubmit(label.id, { name, color })}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Label;
