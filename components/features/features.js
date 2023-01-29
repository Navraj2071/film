import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";

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
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
