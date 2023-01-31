import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [isArrow, setIsArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setIsArrow(true);
    window.removeEventListener("scroll", handleScroll);
  };

  if (!isArrow) return null;

  return (
    <KeyboardArrowUpIcon
      color="primary"
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        fontSize: "3rem",
      }}
      onClick={() => {
        const element = document.getElementById("Navbar");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
    />
  );
};

export default ScrollToTopButton;
