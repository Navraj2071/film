import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Card from "@mui/material/Card";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { width } from "@mui/system";

const Features = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.dark }}>
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
            text="Features"
            gradient
            variant="h2"
            sx={{ fontWeight: 600 }}
            gutterBottom
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
            }}
          >
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={<AccessibilityNewIcon sx={{ fontSize: "100px" }} />}
            />
            <FeatureCard
              title="Feature Title"
              text="This is a great feature to have in an application"
              Icon={
                <AccessibilityNewIcon
                  sx={{ fontSize: "100px" }}
                  color="primary"
                />
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const FeatureCard = (props) => {
  const { title, text, Icon } = props;
  const theme = useTheme();

  return (
    <Card
      sx={{ width: "100%", backgroundColor: theme.palette.background.light }}
      elevation={1}
    >
      {Icon}
      <Typography variant="h3" gutterBottom color="text.medium">
        {title}
      </Typography>
      <Typography variant="h6" gutterBottom color="text.low">
        {text}
      </Typography>
    </Card>
  );
};
