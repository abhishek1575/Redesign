import Box from "@mui/material/Box";
import { useState } from "react";

const ImageBox = () => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 160,
        background: "#fff",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="static/images/ASPICE-image/swe1.png"
        alt="ASPICE SWE.1"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transition: "transform 0.3s ease",
          transform: hover ? "scale(1.1)" : "scale(1)",
        }}
      />
    </Box>
  );
};

export default ImageBox;
