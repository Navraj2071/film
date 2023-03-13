import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Card from "@mui/material/Card";

const HowItWorks = () => {
  const theme = useTheme();

  const howItWorksText1 =
    "Film Finance App uses blockchain technology to launch tokens for its various use cases.";
  const howItWorksText2 =
    "The platform launches ERC-721 tokens for every film project.";
  const howItWorksText3 =
    "The film tokens can be bought/sold and traded on the token exchange.";
  const howItWorksText4 =
    "FILM token (FFA) is the platform's underlying token.";
  const howItWorksText5 =
    "The media streaming platform uses ad-Revenue to reward Content Creators and Users.";
  const howItWorksText6 =
    "Advertisers pay with FILM token per view of ads. Content creators and Users get paid in FILM token for watching ads.";

  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.main }}
      id="HowItWorks"
    >
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
        <Text
          text="How does it work"
          variant="h2"
          sx={{ fontWeight: 600, textShadow: "0px 0px 10px black" }}
          gutterBottom
        />
        <Box
          sx={{
            display: "grid",
            marginTop: "50px",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {[
              howItWorksText1,
              howItWorksText2,
              howItWorksText3,
              howItWorksText4,
              howItWorksText5,
              howItWorksText6,
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  margin: "10px 0px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    minWidth: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    background: theme.palette.primary.main,
                  }}
                ></div>
                <Text
                  text={item}
                  variant="h5"
                  sx={{ maxWidth: "500px", textAlign: "left" }}
                  gutterBottom
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: "100%",
              borderRadius: "20px",
            }}
            component="img"
            src="/flow.png"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
