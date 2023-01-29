import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

const Downarrow = () => {
  const theme = useTheme();
  const [isArrow, setIsArrow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log("listening to scroll.");
    setIsArrow(false);
    window.removeEventListener("scroll", handleScroll);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isArrow && (
        <div
          style={{
            height: "30px",
            width: "30px",
            borderLeft: "1px solid " + theme.palette.primary.main,
            borderBottom: "1px solid " + theme.palette.primary.main,
            animation: "downArrow 2s infinite",
          }}
        ></div>
      )}
    </div>
  );
};

export default Downarrow;
