import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          padding: "0.5rem 1rem",
          borderRadius: "2rem",
          color: "rgba(255, 255, 255, 0.87)",
          "&:hover": {
            // pointerEvents: "none",
          },
        },
      },
    },
  },
  typography: {
    // fontFamily: ["Tenor Sans"],
    button: {
      textTransform: "none",
      fontSize: "1.2rem",
      color: "yellow",
    },
  },
  palette: {
    primary: {
      // main: "#e7b800",
      main: "#ed2938",
    },
    secondary: {
      main: "#ff8c01",
    },
    background: {
      main: "#212121",
      dark: "#151515",
      light: "#333333",
    },
    text: {
      high: "rgba(255, 255, 255, 1)",
      medium: "rgba(255, 255, 255, 0.87)",
      low: "rgba(255, 255, 255, 0.6)",
      disabled: "rgba(255, 255, 255, 0.4)",
    },

    // mode: "dark",
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
