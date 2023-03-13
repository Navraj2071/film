import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Card from "@mui/material/Card";
import React from "react";

const Roadmap = () => {
  const theme = useTheme();

  const milestones = [
    { time: "2023 Q1", points: ["Ideation", "Market review"] },
    {
      time: "Q2",
      points: ["Strategic partnerships", "Market Marketplace launch"],
    },
    {
      time: "Q3",
      points: ["Market Marketplace adoption", "Social media campaigns"],
    },
    { time: "Q4", points: ["Content partnerships", "Celebrity tie-ups"] },
    {
      time: "2024 Q1",
      points: [
        "Media Streaming Platform",
        "FFA token launch",
        "Watch-to-earn program Beta",
      ],
    },
    {
      time: "Q2",
      points: ["Watch-to-earn Alpha", "Monetization", "Ad Revenue"],
    },
  ];

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

        {milestones.map((item) => (
          <Milestone time={item.time} points={item.points} key={item.time} />
        ))}
      </Container>
    </Box>
  );
};

export default Roadmap;

const Milestone = ({ time, points }) => {
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
        <Text text={time} variant="h3" />
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
        {points.map((point, index) => (
          <ul
            key={time + point}
            style={{ color: "white", marginLeft: "20px", fontSize: "20px" }}
          >
            <li>
              <Text text={point} variant="h6" gutterBottom />
            </li>
            {index !== points.length - 1 && <br />}
          </ul>
        ))}
      </Box>
    </Box>
  );
};
