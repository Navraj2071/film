import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useTheme } from "@emotion/react";
import Sidenav from "./sidenav";

const pages = ["About", "Roadmap", "Contact"];

function Navbar() {
  const [sideNavOpen, setSidenavOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <AppBar position="static" elevation={0} color="background">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
            color="primary"
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setSidenavOpen(true)}
            >
              <MenuIcon color="primary" fontSize="large" />
            </IconButton>
            <Sidenav
              open={sideNavOpen}
              setOpen={setSidenavOpen}
              pages={["About", "Features", "Team", "Roadmap", "Contact"]}
            />
          </Box>
          {/* <Avatar
            sx={{
              display: { xs: "flex", sm: "none" },
              mr: "auto",
            }}
          /> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  display: "block",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" endIcon={<TextSnippetIcon />}>
              Whitepaper
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
