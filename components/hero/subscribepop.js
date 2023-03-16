import * as React from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

import Text from "../subcomponents/headings";
import { useTheme } from "@emotion/react";

function SimpleDialog(props) {
  const { onClose, open } = props;
  const theme = useTheme();
  const [email, setEmail] = React.useState("");

  const subscribe = async () => {
    let formData = new FormData();
    formData.append("email", email);

    let response = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(async (response) => {
        onClose();
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <Box
        sx={{
          background: theme.palette.background.dark,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Text
          text="Welcome to Bollywood"
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "800",
            color: theme.palette.text.high,
          }}
        />
        <Text
          text="We'll keep you posted about all the exciting news about FilmFinance.App"
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "800", color: theme.palette.text.medium }}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<MailIcon />}
          onClick={() => subscribe()}
        >
          Submit
        </Button>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ open, setOpen }) {
  return (
    <div>
      <SimpleDialog
        open={open}
        onClose={() => setOpen(false)}
        selectedValue=""
      />
    </div>
  );
}
