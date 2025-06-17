import { Paper, Box } from "@mui/material";
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
      transform: enabled ? "scale(1)" : "scale(0.95)",
      "&:hover": {
        transform: enabled ? "scale(1.05)" : "scale(0.95)",
        boxShadow: enabled ? 3 : "none",
      },
      ...(!enabled && {
        opacity: 0.7,
        filter: "blur(0.8px) grayscale(50%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1) inset",
      }),
      ...disabledEffect,
    }}
  >
    {/* Add subtle shine effect for enabled items */}
    {enabled && (
      <Box
        sx={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
          opacity: 0,
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 0.4,
          },
        }}
        onClick={enabled ? onClick : undefined}
      />
    )}

    <b>{id}</b>
    <br />
    {label}
  </Paper>
);

export default ProcessItem;

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

// import { Grid, Typography, Box } from "@mui/material";
// import ProcessItem from "../ProcessItem";

// const SUPGroup = ({ StyledPaper, isLaptop, enabledProcessAreas }) => {
//   const items = [
//     { id: "SUP.1", label: "Quality Assurance" },
//     { id: "SUP.8", label: "Configuration Management" },
//     { id: "SUP.9", label: "Problem Resolution Management" },
//     { id: "SUP.10", label: "Change Request Management" },
//     { id: "SUP.11", label: "Machine Learning Data Management" },
//   ];

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#D7EAD8",
//         p: 1,
//         borderRadius: "5px",
//         minWidth: isLaptop ? "100px" : "200px",
//         height: isLaptop ? "500px" : "550px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         flexShrink: 0,
//       }}
//     >
//       <Typography
//         variant="subtitle2"
//         fontWeight="bold"
//         mb={1}
//         textAlign="center"
//       >
//         Supporting Process <br /> Group (SUP)
//       </Typography>

//       <Grid
//         container
//         direction="column"
//         spacing={1}
//         sx={{ width: "100%", flexGrow: 1 }}
//       >
//         {items.map((item, i) => {
//           const isEnabled = enabledProcessAreas.includes(item.id);
//           return (
//             <Grid item key={i} sx={{ width: "100%" }}>
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: isLaptop ? 80 : 90,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <ProcessItem
//                   style={StyledPaper}
//                   id={item.id}
//                   label={item.label}
//                   enabled={isEnabled}
//                 />
//               </Box>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default SUPGroup;
