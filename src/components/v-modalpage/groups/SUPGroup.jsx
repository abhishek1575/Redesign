import { Grid, Typography, Box } from "@mui/material";
import ProcessItem from "../ProcessItem";

const SUPGroup = ({ StyledPaper, isLaptop, enabledProcessAreas }) => {
  const items = [
    { id: "SUP.1", label: "Quality Assurance" },
    { id: "SUP.8", label: "Configuration Management" },
    { id: "SUP.9", label: "Problem Resolution Management" },
    { id: "SUP.10", label: "Change Request Management" },
    { id: "SUP.11", label: "Machine Learning Data Management" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#D7EAD8",
        p: 1,
        borderRadius: "5px",
        minWidth: isLaptop ? "100px" : "200px",
        height: isLaptop ? "500px" : "550px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        mb={1}
        textAlign="center"
      >
        Supporting Process <br /> Group (SUP)
      </Typography>

      <Grid
        container
        direction="column"
        spacing={1}
        sx={{ width: "100%", flexGrow: 1 }}
      >
        {items.map((item, i) => {
          const isEnabled = enabledProcessAreas.includes(item.id);
          return (
            <Grid item key={i} sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  height: isLaptop ? 80 : 90,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ProcessItem
                  style={StyledPaper}
                  id={item.id}
                  label={item.label}
                  enabled={isEnabled}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SUPGroup;

// import { Grid, Typography, Box } from "@mui/material";
// import ProcessItem from "../ProcessItem";

// const SUPGroup = ({ StyledPaper, isLaptop, enabled }) => {
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
//         opacity: enabled ? 1 : 0.5,
//         pointerEvents: enabled ? "auto" : "none",
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
//         {items.map((item, i) => (
//           <Grid item key={i} sx={{ width: "100%" }}>
//             <Box
//               sx={{
//                 width: "100%",
//                 height: isLaptop ? 80 : 90,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <ProcessItem
//                 style={StyledPaper}
//                 id={item.id}
//                 label={item.label}
//               />
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default SUPGroup;

// // import { Grid, Typography, Box } from "@mui/material";
// // import ProcessItem from "../ProcessItem";

// // const SUPGroup = ({ StyledPaper, isLaptop }) => {
// //   const items = [
// //     { id: "SUP 1", label: "Quality Assurance" },
// //     { id: "SUP 2", label: "Configuration Management" },
// //     { id: "SUP 3", label: "Problem Resolution Management" },
// //     { id: "SUP 4", label: "Change Request Management" },
// //     { id: "SUP 5", label: "Machine Learning Data Management" },
// //   ];

// //   return (
// //     <Box
// //       sx={{
// //         backgroundColor: "#D7EAD8",
// //         p: 1,
// //         borderRadius: "5px",
// //         minWidth: isLaptop ? "100px" : "200px",
// //         height: isLaptop ? "500px" : "550px",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         flexShrink: 0,
// //       }}
// //     >
// //       <Typography
// //         variant="subtitle2"
// //         fontWeight="bold"
// //         mb={1}
// //         textAlign="center"
// //       >
// //         Supporting Process <br /> Group (SUP)
// //       </Typography>
// //       <Grid container spacing={1} direction="column" alignItems="center">
// //         {items.map((item, i) => (
// //           <Grid item key={i} sx={{ width: "100%" }}>
// //             <ProcessItem style={StyledPaper} id={item.id} label={item.label} />
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default SUPGroup;
