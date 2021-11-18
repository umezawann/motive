import * as React from "react";
import Link from "next/link";
import { getRoutes } from "./../../../lib/routes";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import SettingsIcon from "@mui/icons-material/Settings";
import LabelIcon from "@mui/icons-material/Label";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import LabelFormDialog from "@/components/templates/LabelFormDialog/index";
import { apiClient } from "@/lib/axios";
import { useLabels } from "@/hooks/api/labels";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Label from "components/templates/Label/Label";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MyComponent = styled("div")({
  textDecoration: "none",
  fontWeight: "bold",
  color: "white",
  fontSize: "22px",
  ":hover": {
    opacity: "0.7",
    fontStyle: "italic",
  },
});

const Profile = styled("div")({
  height: "21px",
  margin: "8px 0 0",
  textAlign: "left",
});

const Settings = styled("div")({
  height: "21px",
  margin: "0 0 8px",
  textAlign: "left",
});

export default function BaseLayout({ children }: { children: any }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [labelDialogOpen, setLabelDialogOpen] = React.useState(false);
  const { data: labels } = useLabels();
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLabelDialogOpen = () => {
    setLabelDialogOpen(true);
  };

  const handleLabelDialogClose = () => {
    setLabelDialogOpen(false);
  };

  const handleLabelFormSubmit = async (values) => {
    console.log("values ", values);
    await apiClient.post("/labels", values);
    handleLabelDialogClose();
  };

  const hadleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isOpen = Boolean(anchorEl);

  const items = [
    {
      key: "today",
      component: <AccessTimeIcon />,
    },
    {
      key: "upcoming",
      component: <AssignmentIcon />,
    },
    {
      key: "logs",
      component: <FormatAlignLeftIcon />,
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Link href={getRoutes("root")}>
                <a>
                  <MyComponent>Motive</MyComponent>
                </a>
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "110px",
                padding: "auto",
              }}
            >
              <AccountCircleIcon></AccountCircleIcon>
              <AccountCircleIcon></AccountCircleIcon>
              <div>
                <IconButton
                  onClick={hadleClick}
                  color="inherit"
                  style={{ padding: "0px" }}
                >
                  <AccountCircleIcon />
                </IconButton>
                <Popover
                  open={isOpen}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Card sx={{ p: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "center",
                      }}
                    >
                      <AccountCircleIcon
                        style={{ fontSize: "3rem", margin: "7px" }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Profile>First name, Last name</Profile>
                        <Settings>e-mail address</Settings>
                      </div>
                    </div>
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
                        <SettingsIcon />
                      </div>
                      <div style={{ lineHeight: "38px" }}>Settings</div>
                    </div>
                  </Card>
                </Popover>{" "}
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {items.map((text, index) => (
              <Link href={getRoutes(text.key)} key={text.key}>
                <a style={{ textDecoration: "none", color: "black" }}>
                  <ListItem button>
                    <ListItemIcon>{text.component}</ListItemIcon>
                    <ListItemText primary={text.key} />
                  </ListItem>
                </a>
              </Link>
            ))}
          </List>
          <Divider />

          <List>
            <ListItem>
              <div>label</div>
              <IconButton
                color="inherit"
                onClick={handleLabelDialogOpen}
                sx={{
                  ...(!open && { display: "none" }),
                }}
              >
                <AddIcon />
              </IconButton>
            </ListItem>

            {/* TODO: display labels */}

            <Label labels={labels} />
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>

      <LabelFormDialog
        open={labelDialogOpen}
        handleClose={handleLabelDialogClose}
        handleSubmit={handleLabelFormSubmit}
      />
    </>
  );
}
