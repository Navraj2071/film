import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Text from "../subcomponents/headings";
import Downarrow from "../subcomponents/downarrow";

const Hero = () => {
  const theme = useTheme();

  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const medium = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={{ backgroundColor: theme.palette.background.main }}>
      <Container
        maxWidth="xl"
        sx={{
          //   minHeight: "90vh",
          display: { xs: "flex", sm: "grid" },
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "center",
          paddingTop: "5rem",
          paddingBottom: "5rem",
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
          <img src="/1.svg" alt="" width="100%" />
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
                fontSize: { xs: "2rem", md: "2.5rem" },
                "&:hover": { color: theme.palette.primary.main },
              }}
            />
            <LinkedInIcon
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                "&:hover": { color: theme.palette.primary.main },
              }}
            />
            <TelegramIcon
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                "&:hover": { color: theme.palette.primary.main },
              }}
            />
          </Box>
        </Box>
      </Container>
      <Downarrow />
    </Box>
  );
};

export default Hero;
