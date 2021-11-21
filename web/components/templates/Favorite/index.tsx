import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { apiClient } from "@/lib/axios";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LabelIcon from "@mui/icons-material/Label";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

type LabelType = {
  id: string;
  name: string;
  color: string;
};
type LabelPropType = {
  label: LabelType;
};

const Favorite = ({ label }: LabelPropType) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const labelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const labelClose = () => {
    setAnchorEl(null);
  };

  const deleteInFavorite = async () => {
    console.log("deleteInFavorite");
    await apiClient.delete(`/favorites/labels/${label.id}`);
  };

  const labelIsOpen = Boolean(anchorEl);

  return (
    <>
      <ListItem button key={label.id}>
        <ListItemIcon>
          <LabelIcon sx={{ color: label.color }} />
        </ListItemIcon>
        <ListItemText primary={label.name} />
        <div>
          <IconButton
            onClick={labelClick}
            color="inherit"
            style={{ padding: "0px" }}
          >
            <MoreHoriz />
          </IconButton>
          <Popover
            open={labelIsOpen}
            anchorEl={anchorEl}
            onClose={labelClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Card sx={{ p: 1 }}>
              <CardContent>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} onClick={deleteInFavorite}>
                    <div style={{ padding: "7px" }}>
                      <StarBorderIcon />
                    </div>
                    <div style={{ lineHeight: "38px" }}>
                      お気に入りから削除する
                    </div>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Popover>{" "}
        </div>
      </ListItem>
    </>
  );
};

export default Favorite;
