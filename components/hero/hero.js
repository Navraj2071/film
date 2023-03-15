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
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Downarrow from "../subcomponents/downarrow";
import ScrollToTopButton from "./fab";
import { useState, useEffect, useRef } from "react";
import SimpleDialogDemo from "./subscribepop";

import Navbar from "../navbar/navbar";
import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

const Hero = () => {
  const theme = useTheme();
  const posterRef = useRef();

  const texts = ["Create", "Invest in", "Trade", "Watch", "Love"];
  const [myText, setMyText] = useState("Love");
  const TextComp = () => (
    <span style={{ animation: "textAppear 1s" }}>{myText} </span>
  );
  const [poster, setPoster] = useState(1);
  const [subscribeOpen, setSubscribe] = useState(false);

  const poppulateText = () => {
    let currentIndex = texts.indexOf(myText);
    let newIndex = currentIndex + 1;
    if (currentIndex === 4) {
      newIndex = 0;
    }
    setMyText(texts[newIndex]);
    poppulatePoster();
  };
  const poppulatePoster = () => {
    setPoster((prev) => {
      if (prev == 12) {
        return 1;
      } else return prev + 1;
    });
  };

  useEffect(() => {
    const myInterval = setInterval(poppulateText, "2000");
    return () => clearInterval(myInterval);
  });

  const posterImage = "/posters/" + poster + ".png";

  const subscribe = () => {
    setSubscribe(true);
  };

  return (
    <Box id="Home">
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          display: { xs: "flex", sm: "grid" },
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "center",
          paddingTop: { xs: "5rem", sm: "5rem" },
          paddingBottom: { xs: "5rem", sm: "5rem" },
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
            height: "100%",
            justifyContent: "center",
          }}
        >
          {/* <Text
            variant="h2"
            text="Trade Film <span>dfgdf</span> "
            gutterBottom
            sx={{ fontWeight: "800", color: theme.palette.text.high }}
          /> */}

          <Typography
            variant="h2"
            sx={{
              fontWeight: "800",
              color: theme.palette.text.medium,
              textShadow: "0px 0px 10px black",
              width: "100%",
              display: { xs: "flex", sm: "flex" },
              gridTemplateColumns: "1fr 1fr",
              flexDirection: "column",
            }}
          >
            <TextComp />
            <span
              style={{
                color: theme.palette.text.high,
                paddingBottom: "0px",
                lineHeight: "60px",
              }}
            >
              Films
            </span>
          </Typography>

          <Text
            variant="h4"
            text="Decentralized Media Funding and Streaming Platform"
            gutterBottom
            sx={{ marginTop: "0px", paddingTop: "0px" }}
          />

          <Button
            variant="contained"
            endIcon={<NewspaperIcon />}
            sx={{
              "&:hover": { color: theme.palette.primary.main },
            }}
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: "5fr 1fr",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div className="poster" ref={posterRef}>
            <img src={posterImage} alt="" width="100%" height="100%" />
            <div className="posterFrame">
              <img
                src="/posters/frame2.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              alignItems: "flex-end",
              justifyContent: { xs: "center", md: "center" },
              gap: "1rem",
            }}
          >
            <TwitterIcon
              sx={{
                color: theme.palette.text.medium,
                fontSize: { xs: "2rem", md: "2.5rem" },
                "&:hover": { color: theme.palette.primary.main },
              }}
              onClick={() => window.open("https://twitter.com/Filmfinanceapp/")}
            />
            <LinkedInIcon
              sx={{
                color: theme.palette.text.medium,
                fontSize: { xs: "2rem", md: "2.5rem" },
                "&:hover": { color: theme.palette.primary.main },
              }}
              onClick={() =>
                window.open("https://www.linkedin.com/company/filmfinanceapp/")
              }
            />
            <TelegramIcon
              sx={{
                color: theme.palette.text.medium,
                fontSize: { xs: "2rem", md: "2.5rem" },
                "&:hover": { color: theme.palette.primary.main },
              }}
              onClick={() => window.open("https://t.me/+zgtoRoLProc3MWU1")}
            />
            <DiscordIcon />
          </Box>
        </Box>
      </Container>
      <Downarrow />
      <ScrollToTopButton />
      <SimpleDialogDemo open={subscribeOpen} setOpen={setSubscribe} />
    </Box>
  );
};

export default Hero;

const DiscordIcon = () => {
  return (
    <img
      src="/discord.svg"
      style={{ height: "1.8rem" }}
      className="discord"
      onClick={() => window.open("https://discord.gg/djBrRfAS3w")}
    />
  );
};
