import { Box } from "@mui/material";
import React from "react";
import ProcessItem from "./ProcessItem";

const PositionedItem = ({
  positions,
  isLaptop,
  style,
  id,
  label,
  onClick,
  enabled, // Add enabled prop here
}) => {
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
      <ProcessItem
        style={style}
        id={id}
        label={label}
        onClick={onClick}
        enabled={enabled} // Pass enabled prop to ProcessItem
      />
    </Box>
  );
};

export default PositionedItem;

// import { Box } from "@mui/material";
// import React from "react";
// import ProcessItem from "./ProcessItem";

// const PositionedItem = ({ positions, isLaptop, style, id, label, onClick }) => {
//   const [top, left] = positions[isLaptop ? "laptop" : "desktop"];

//   return (
//     <Box
//       sx={{
//         position: "absolute",
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: "translate(-50%, -50%)",
//       }}
//     >

//       <ProcessItem style={style} id={id} label={label} onClick={onClick} />
//     </Box>
//   );
// };

// export default PositionedItem;
