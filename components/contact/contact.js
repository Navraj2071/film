import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.main }} id="Contact">
      <Container
        maxWidth="xl"
        sx={{
          //   minHeight: "90vh",
          backgroundColor: theme.palette.background.dark,
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
          text="Contact Us"
          variant="h2"
          sx={{ fontWeight: 600, textShadow: "0px 0px 10px black" }}
          gutterBottom
        />
        <Text text="We would love to hear from you" variant="h4" gutterBottom />
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          color="primary"
          inputProps={{
            style: {
              fontSize: 30,
              color: theme.palette.text.medium,
              margin: "20px",
            },
          }}
          InputLabelProps={{
            style: { fontSize: 15, color: theme.palette.text.disabled },
          }}
          sx={{ width: "100%", maxWidth: "500px" }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          color="primary"
          inputProps={{
            style: {
              fontSize: 30,
              color: theme.palette.text.medium,
              margin: "20px",
            },
          }}
          InputLabelProps={{
            style: { fontSize: 15, color: theme.palette.text.disabled },
          }}
          sx={{ width: "100%", maxWidth: "500px" }}
        />
        <TextField
          id="standard-basic"
          label="Message"
          variant="standard"
          color="primary"
          multiline
          rows={5}
          inputProps={{
            style: {
              fontSize: 30,
              color: theme.palette.text.medium,
              margin: "20px",
            },
          }}
          InputLabelProps={{
            style: { fontSize: 15, color: theme.palette.text.disabled },
          }}
          sx={{ width: "100%", maxWidth: "500px", marginBottom: "50px" }}
        />
        <Button variant="contained" endIcon={<MailIcon />}>
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;
