import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Card from "@mui/material/Card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const membersList = [
  {
    name: "Rittik Das",
    title: "Founder & CEO",
    image: "/rittik.jpeg",
    description:
      "Rittik Das is a highly experienced and accomplished blockchain and crypto currency expert based in Kolkata. He is the author of two critically acclaimed books on the subject, 'The Fundamentals of Crypto currency by Rittik Das' and 'The Fundamentals of Crypto currency 2.0 - The Journey Continues'",
    link: "https://www.linkedin.com/in/rittik-das-96131368/",
  },
  {
    name: "Om Prakash Behera",
    title: "Founder & CMO",
    image: "/om.jpeg",
    description:
      "Om has almost 18+ years of experience in the Public Relation & Marketing, Operations, & Customer Support field in my previous companies, like BPO, KPO, Airlines, Travels, Event Management, Immigration, & Education Industry. He is involved in planning and coordinating multiple promotional activities, representing the company in events and was a part of making the company a well-known name in the corporate industry.",
    link: "https://www.linkedin.com/in/omprakashbehera",
  },
  {
    name: "Navraj Sharma",
    title: "Founder & CTO",
    image: "/navraj.jpeg",
    description:
      "Navraj Sharma is a seasoned developer with a proclivity for decentralized technologies, web development, and blockchain. He boasts a thorough comprehension of these disciplines, having honed his skills through the development of multiple decentralized applications for start-ups and businesses. ",
    link: "https://linkedin.com/in/navraj-sharma-882059166",
  },
];

const Team = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.dark }} id="Team">
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
          text="Core Team"
          gradient
          variant="h2"
          sx={{ fontWeight: 600 }}
          gutterBottom
        />
        <Box
          sx={{
            display: "grid",
            marginTop: "50px",
            width: "100%",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {membersList.map((member) => (
            <Member
              name={member.name}
              title={member.title}
              description={member.description}
              image={member.image}
              link={member.link}
              key={member.name}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Team;

const Member = (props) => {
  const theme = useTheme();
  const { name, title, image, description, link } = props;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.light,
        padding: "20px",
        borderRadius: "20px",
        width: "100%",
        textAlign: "left",
      }}
    >
      <img
        src={image}
        alt={name}
        height={200}
        width={200}
        style={{ borderRadius: "100px" }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Text text={name} variant="h5" color="text.high" />
          <Text
            text={title}
            gutterBottom
            variant="subtitle2"
            sx={{ fontWeight: "600", fontStyle: "italic" }}
          />
        </Box>
        <LinkedInIcon
          sx={{
            color: theme.palette.text.medium,
            fontSize: { xs: "2rem", md: "2.5rem" },
            "&:hover": { color: theme.palette.primary.main },
          }}
          onClick={() => window.open(link)}
        />
      </Box>

      <Text text={description} gutterBottom variant="body2" />
    </Box>
  );
};
