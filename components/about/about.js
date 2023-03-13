import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import TelegramIcon from "@mui/icons-material/Telegram";

const About = () => {
  const theme = useTheme();

  const aboutText1 =
    "FilmFinance.app is a revolutionary decentralized finance (DeFi) platform that aims to change the way films are funded, distributed, and traded in the film industry.";
  const aboutText2 =
    "By utilizing blockchain technology, we provide a range of innovative financing options for filmmakers, including crowdfunding, tokenized investment opportunities, and a 'watch-to-earn' program where viewers can earn money by watching ads in between films.";
  const aboutText3 =
    "With our platform, content creators can raise funds for their movies, short films, and web series in a secure and transparent way. Additionally, our platform offers several benefits such as digital rights management, new revenue streams, and liquidity for investors.";
  const aboutText4 =
    "Join us in our mission to revolutionize the film industry and empower independent filmmakers to bring their stories to life. Invest in the future of film with FilmFinance.app.";

  const missionText =
    "At FilmFinance.App, we aim to revolutionize the film industry by providing a platform for crowdfunding through film tokens, enabling the trading of these tokens, and creating a watch-to-earn program for viewers. Our goal is to make film financing and distribution more accessible, transparent, and inclusive for everyone involved.";
  return (
    // <Box sx={{ backgroundColor: theme.palette.background.dark }} id="About">
    <Box id="About">
      <Container
        maxWidth="xl"
        sx={{
          //   minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "100px",
          }}
        >
          <Text
            text="About"
            variant="h2"
            sx={{ fontWeight: 600, textShadow: "0px 0px 10px black" }}
            gutterBottom
          />
          <Text text={missionText} variant="h4" gutterBottom />

          {/* {[aboutText1, aboutText2, aboutText3, aboutText4].map(
            (item, index) => (
              <Box
                key={item}
                sx={{
                  width: "100%",
                  textAlign: index % 2 === 0 ? "left" : "right",
                  display: "flex",
                  alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                }}
              >
                <Text
                  text={item}
                  variant="h5"
                  gutterBottom
                  sx={{ maxWidth: "500px" }}
                />
              </Box>
            )
          )} */}
        </Box>
        <Button
          variant="outlined"
          endIcon={<TelegramIcon />}
          sx={{
            "&:hover": { color: theme.palette.primary.main },
            marginTop: { xs: "5rem", sm: "10rem" },
          }}
        >
          Join Us
        </Button>
      </Container>
    </Box>
  );
};

export default About;
