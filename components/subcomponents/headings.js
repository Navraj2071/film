import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

const Text = ({ variant, text, gutterBottom, color, gradient, sx }) => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("md"));
  const medium = useMediaQuery(theme.breakpoints.up("sm"));
  const small = useMediaQuery(theme.breakpoints.up("xs"));

  const typoVariant = {
    h1: large ? "h1" : medium ? "h2" : "h3",
    h2: large ? "h2" : medium ? "h3" : "h4",
    h3: large ? "h3" : medium ? "h4" : "h5",
    h4: large ? "h4" : medium ? "h5" : "h6",
  };
  return (
    <Typography
      variant={typoVariant[variant] ? typoVariant[variant] : variant}
      gutterBottom={gutterBottom}
      color={color ? color : "text.medium"}
      className={gradient ? "gradientText" : ""}
      sx={sx}
    >
      {text}
    </Typography>
  );
};

export default Text;
