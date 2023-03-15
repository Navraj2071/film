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
import Text from "../subcomponents/headings";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

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

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
    // window.setTimeout(() => setOpen(false), 2000);
  };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      color="primary"
      role="presentation"
      // onClick={toggleDrawer(false)}
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
              <ListItemButton onClick={() => scrollToElement(text)}>
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
      disableRestoreFocus
      PaperProps={{
        sx: {
          backgroundColor: "background.dark",
        },
      }}
    >
      {list()}
      <Button
        variant="outlined"
        endIcon={<TextSnippetIcon />}
        onClick={() => window.open("/litepaper.pdf")}
        sx={{ margin: "20px" }}
      >
        Litepaper
      </Button>
    </Drawer>
  );
}
