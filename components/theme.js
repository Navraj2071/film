import { createTheme } from "@mui/material/styles";

const font = "'Ubuntu', sans-serif";

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
    fontFamily: [font],

    button: {
      textTransform: "none",
      fontSize: "1.2rem",
      color: "yellow",
    },
  },
  palette: {
    primary: {
      // main: "#e7b800",
      main: "rgb(235, 119, 119)",
    },
    secondary: {
      main: "#ff8c01",
    },
    background: {
      // main: "#571024",
      main: "rgba(0, 0, 0, 0)",
      // dark: "#151515",
      dark: "#054877",
      light: "#333333",
    },
    // text: {
    //   high: "rgba(255, 255, 255, 1)",
    //   medium: "rgba(255, 255, 255, 0.87)",
    //   low: "rgba(255, 255, 255, 0.6)",
    //   disabled: "rgba(255, 255, 255, 0.4)",
    // },
    text: {
      high: "rgb(235, 119, 119)",
      medium: "white",
      low: "rgba(255, 255, 255, 0.6)",
      disabled: "rgba(255, 255, 255, 0.4)",
    },

    // mode: "dark",
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
