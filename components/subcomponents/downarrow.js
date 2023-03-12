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
        zIndex: 4,
      }}
    >
      {isArrow && (
        <div
          style={{
            height: "30px",
            width: "30px",
            borderLeft: "1px solid " + theme.palette.text.medium,
            borderBottom: "1px solid " + theme.palette.text.medium,
            animation: "downArrow 2s infinite",
          }}
        ></div>
      )}
    </div>
  );
};

export default Downarrow;
