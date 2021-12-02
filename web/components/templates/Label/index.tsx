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
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { apiClient } from '@/lib/axios';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';

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

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

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
    await apiClient.post(`/labels/${id}`, body);
  };

  const labelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const labelClose = () => {
    setAnchorEl(null);
  };

  const addToFavorite = async () => {
    console.log('addToFavorite')
    await apiClient.post(`/favorites/labels/${label.id}`, {});
  }

  const labelIsOpen = Boolean(anchorEl);

  return (
    <Link href={`/labels/${label.id}`} >
      <ListItem button key={label.id}>
        <ListItemIcon>
          <LabelIcon sx={{ color: label.color }} />
        </ListItemIcon>
        <ListItemText primary={label.name} />
        <div>
          <IconButton
            onClick={labelClick}
            color="inherit"
            style={{ padding: '0px' }}
          >
            <MoreHoriz />
          </IconButton>
          <Popover
            open={labelIsOpen}
            anchorEl={anchorEl}
            onClose={labelClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Card sx={{ p: 1 }}>
              <CardContent>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} onClick={handleClickOpen}>
                    <div style={{ padding: '7px' }}>
                      <EditIcon />
                    </div>
                    <div style={{ lineHeight: '38px' }}>編集する</div>
                  </Stack>
                  <Stack direction="row" spacing={1} onClick={addToFavorite}>
                    <div style={{ padding: '7px' }}>
                      <StarBorderIcon />
                    </div>
                    <div style={{ lineHeight: '38px' }}>お気に入りに追加する</div>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <FormDialog
              open={open}
              handleClose={handleClose}
              label={label}
              handleSubmit={handleSubmit}
            />
          </Popover>{' '}
        </div>
      </ListItem>
    </Link>
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
