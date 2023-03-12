import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Card from "@mui/material/Card";

const Roadmap = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.main }} id="Roadmap">
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
          text="Roadmap"
          variant="h2"
          sx={{ fontWeight: 600, textShadow: "0px 0px 10px black" }}
          gutterBottom
        />
        <Milestone1 />
        <Milestone2 />
        <Milestone3 />
      </Container>
    </Box>
  );
};

export default Roadmap;

const Milestone1 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 4fr" }}
      mt={2}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.light,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Text text="Phase1" variant="h3" />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.dark,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Text
          text="FilmFinance.App concept is born"
          variant="h6"
          gutterBottom
        />
        <br />
        <Text
          text="Research on Blockchain, Web3 & Content Creation and Funding Idea and Conceptualization "
          variant="h6"
          gutterBottom
        />
        <br />
        <Text text="Project Planning " variant="h6" gutterBottom />
        <br />
        <Text text="Workflow Design " variant="h6" gutterBottom />
      </Box>
    </Box>
  );
};

const Milestone2 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 4fr" }}
      mt={2}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.light,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Text text="Phase2" variant="h3" />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.dark,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Text
          text="Social Sharing of the Project Concept via Medium Article"
          variant="h6"
          gutterBottom
        />
        <br />
        <Text text="Social Media Creation  " variant="h6" gutterBottom />
        <br />
        <Text
          text="Community building and Team building "
          variant="h6"
          gutterBottom
        />
        <br />
        <Text text="Website Development " variant="h6" gutterBottom />
        <br />
        <Text text="Planning Marketing Strategy " variant="h6" gutterBottom />
        <br />
        <Text text="Website launch " variant="h6" gutterBottom />
      </Box>
    </Box>
  );
};
const Milestone3 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 4fr" }}
      mt={2}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.light,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Text text="Phase3" variant="h3" />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.dark,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Text text="Marketing Campaign starts" variant="h6" gutterBottom />
        <br />
        <Text
          text="Community Growth & Development "
          variant="h6"
          gutterBottom
        />
        <br />
        <Text
          text="Introduction of Film Finance coin / Film Finance NFT"
          variant="h6"
          gutterBottom
        />
        <br />
        <Text text="Strategic Partnerships" variant="h6" gutterBottom />
      </Box>
    </Box>
  );
};
