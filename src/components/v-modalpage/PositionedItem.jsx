import { Box } from "@mui/material";
import React from "react";
import ProcessItem from "./ProcessItem";

const PositionedItem = ({ positions, isLaptop, style, id, label }) => {
  const [top, left] = positions[isLaptop ? "laptop" : "desktop"];

  return (
    <Box
      sx={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <ProcessItem style={style} id={id} label={label} />
    </Box>
  );
};

export default PositionedItem;
