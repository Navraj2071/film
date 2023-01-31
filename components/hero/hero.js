import React from "react";
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
import Downarrow from "../subcomponents/downarrow";
import ScrollToTopButton from "./fab";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.main }} id="Home">
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "90vh",
          display: { xs: "flex", sm: "grid" },
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "center",
          paddingTop: { xs: "5rem", sm: "10rem" },
          paddingBottom: { xs: "5rem", sm: "10rem" },
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Text
            variant="h2"
            text="Film Finance App"
            gutterBottom
            gradient
            sx={{ fontWeight: "800" }}
          />
          <Text
            variant="h4"
            text="Decentralized Media Funding and Streaming Platform"
            gutterBottom
          />

          <Button
            variant="outlined"
            endIcon={<NewspaperIcon />}
            sx={{
              "&:hover": { color: theme.palette.primary.main },
            }}
          >
            Subscribe
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: "5fr 1fr",
            flexDirection: "column",
          }}
        >
          {/* <img src="/landing.gif" alt="" width="100%" /> */}
          <video
            controls={false}
            loop
            muted
            src="/1.mp4"
            width="100%"
            autoPlay
            type="video/mp4"
            style={{ margin: "50px 0px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              alignItems: "flex-end",
              justifyContent: { xs: "center", md: "flex-start" },
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
        </Box>
      </Container>
      <Downarrow />
      <ScrollToTopButton />
    </Box>
  );
};

export default Hero;
