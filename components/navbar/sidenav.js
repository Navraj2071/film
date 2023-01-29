import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Sidenav(props) {
  const { open, setOpen, pages } = props;
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      color="primary"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Button onClick={() => setOpen(false)}>
        <Typography variant="h4" color="primary">
          X
        </Typography>
      </Button>
      <List>
        {pages.map((text, index) => (
          <React.Fragment key={"sidenav" + text}>
            <ListItem>
              <ListItemButton>
                {/* <ListItemText primary={text} /> */}
                <Typography variant="h5" color="text.medium" gutterbottom>
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
            <Divider color={theme.palette.primary.main} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          backgroundColor: "background.dark",
        },
      }}
    >
      {list()}
    </Drawer>
  );
}
