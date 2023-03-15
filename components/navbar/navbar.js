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
import Text from "../subcomponents/headings";

const pages = ["About", "Team", "Roadmap"];

function Navbar() {
  const [sideNavOpen, setSidenavOpen] = React.useState(false);
  const theme = useTheme();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static" elevation={0} color="background" id="Navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setSidenavOpen(true)}
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  color: theme.palette.text.medium,
                  marginTop: "10px",
                }}
              />
            </IconButton>
            <Sidenav
              open={sideNavOpen}
              setOpen={setSidenavOpen}
              pages={["Features", "About", "Team", "Roadmap"]}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              mr: 1,
              height: "50px",
            }}
            component="img"
            src="/logo4.png"
          />
          <Button
            sx={{
              my: 2,
              display: { xs: "none", sm: "block" },

              "&:hover": { color: theme.palette.primary.main },
            }}
            onClick={() => scrollToElement("home")}
          >
            <Text
              variant="h4"
              text="FilmFinance"
              sx={{
                color: theme.palette.text.medium,
                textShadow: "0px 0px 10px black",
              }}
            />
          </Button>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
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
                onClick={() => scrollToElement(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="outlined"
              endIcon={<TextSnippetIcon />}
              onClick={() => window.open("/litepaper.pdf")}
            >
              Litepaper
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
