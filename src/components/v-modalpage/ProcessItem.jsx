import { Paper } from "@mui/material";
import React from "react";

const ProcessItem = ({
  style,
  id,
  label,
  enabled,
  disabledEffect,
  onClick,
}) => (
  <Paper
    elevation={enabled ? 2 : 0}
    sx={{
      ...style,
      position: "relative",
      overflow: "hidden",
      cursor: enabled ? "pointer" : "default",
      transition: "all 0.3s ease",
      transform: enabled ? "scale(1)" : "scale(1)",
      "&:hover": {
        transform: enabled ? "scale(1.05)" : "scale(1)",
        boxShadow: enabled ? 3 : "none",
      },
      ...(!enabled && {
        backgroundColor: "#C1C1C1", // Light gray background '#f5f5f5'
        color: "#9D9D9D", // Medium gray text "#9e9e9e"
        boxShadow: "none",
      }),
      ...disabledEffect,
    }}
    onClick={enabled ? onClick : undefined}
  >
    <b>{id}</b>
    <br />
    {label}
  </Paper>
);

export default ProcessItem;

// import { Paper, Box } from "@mui/material";
// import React from "react";

// const ProcessItem = ({
//   style,
//   id,
//   label,
//   enabled,
//   disabledEffect,
//   onClick,
// }) => (
//   <Paper
//     elevation={enabled ? 2 : 0}
//     sx={{
//       ...style,
//       position: "relative",
//       overflow: "hidden",
//       cursor: enabled ? "pointer" : "default",
//       transition: "all 0.3s ease",
//       transform: enabled ? "scale(1)" : "scale(0.95)",
//       "&:hover": {
//         transform: enabled ? "scale(1.05)" : "scale(0.95)",
//         boxShadow: enabled ? 3 : "none",
//       },
//       ...(!enabled && {
//         opacity: 0.7,
//         filter: "blur(0.8px) grayscale(50%)",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1) inset",
//       }),
//       ...disabledEffect,
//     }}
//   >
//     {/* Add subtle shine effect for enabled items */}
//     {enabled && (
//       <Box
//         sx={{
//           position: "absolute",
//           top: "-50%",
//           left: "-50%",
//           width: "200%",
//           height: "200%",
//           background:
//             "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
//           opacity: 0,
//           transition: "opacity 0.3s",
//           "&:hover": {
//             opacity: 0.4,
//           },
//         }}
//         onClick={enabled ? onClick : undefined}
//       />
//     )}

//     <b>{id}</b>
//     <br />
//     {label}
//   </Paper>
// );

// export default ProcessItem;

// import { Paper } from "@mui/material";
// import React from "react";

// const ProcessItem = ({ style, id, label, enabled, onClick }) => (
//   <Paper
//     elevation={enabled ? 2 : 0}
//     sx={{
//       ...style,
//       cursor: enabled ? "pointer" : "default",
//       transition: "transform 0.2s ease, opacity 0.3s ease",
//       "&:hover": {
//         transform: enabled ? "scale(1.05)" : "none",
//         boxShadow: enabled ? 3 : "none",
//       },
//       opacity: enabled ? 1 : 0.3,
//       pointerEvents: enabled ? "auto" : "none",
//       filter: enabled ? "none" : "grayscale(80%)",
//     }}
//     onClick={enabled ? onClick : undefined}
//   >
//     <b>{id}</b>
//     <br />
//     {label}
//   </Paper>
// );

// export default ProcessItem;

