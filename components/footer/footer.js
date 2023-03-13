import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Text from "../subcomponents/headings";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.main }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: { xs: "1rem", sm: "2rem" },
          paddingBottom: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Navigation />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: "1rem",
          }}
        >
          <Logo />
          <Social />
        </Box>
        <Rights />
      </Container>
    </Box>
  );
};

export default Footer;

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          mr: 1,
          height: "100px",
        }}
        component="img"
        src="/logo4.png"
      />
      <Text
        text="FILMFINANCE.APP"
        variant="h5"
        sx={{ fontWeight: "800", textShadow: "0px 0px 10px black" }}
      />
    </Box>
  );
};

const Navigation = () => {
  const pages = ["Home", "About", "Team"];
  const theme = useTheme();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {pages.map((page) => (
        <Button
          key={page + "footer-element"}
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
  );
};
const Social = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <TwitterIcon
        sx={{
          color: theme.palette.text.medium,
          fontSize: { xs: "2rem", md: "2.5rem" },
          "&:hover": { color: theme.palette.primary.main },
        }}
      />
      <LinkedInIcon
        sx={{
          color: theme.palette.text.medium,
          fontSize: { xs: "2rem", md: "2.5rem" },
          "&:hover": { color: theme.palette.primary.main },
        }}
      />
      <TelegramIcon
        sx={{
          color: theme.palette.text.medium,
          fontSize: { xs: "2rem", md: "2.5rem" },
          "&:hover": { color: theme.palette.primary.main },
        }}
      />
      <RedditIcon
        sx={{
          color: theme.palette.text.medium,
          fontSize: { xs: "2rem", md: "2.5rem" },
          "&:hover": { color: theme.palette.primary.main },
        }}
      />
    </Box>
  );
};

const Rights = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 0px",
      }}
    >
      <Text
        text="Copyright @ 2023 Film Finance App. All rights reserved."
        variant="subtitle2"
      />
    </Box>
  );
};
