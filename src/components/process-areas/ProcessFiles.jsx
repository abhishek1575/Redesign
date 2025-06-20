import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { Description, Download } from "@mui/icons-material";

const FileItem = ({ file }) => (
  <Box
    sx={{
      bgcolor: "white",
      borderRadius: 2,
      p: 1.5,
      mb: 1.5,
      display: "flex",
      gap: 2,
      borderLeft: `4px solid ${file.color}`,
      transition: "all 0.2s",
      "&:hover": {
        transform: "translateX(5px)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      },
    }}
  >
    {/* Left Section - Icon + Text */}
    <Box
      display="flex" 
      alignItems="center"
      flex={1}
    >
      <Description
        sx={{
          color: file.color,
          mr: 1.5,
          fontSize: "1.8rem",
        }}
      />
      <Box>
        <Typography variant="body2" fontWeight="600">
          {file.name}
        </Typography>
        <Typography
          variant="caption"
          color={file.type === "input" ? "#3b82f6" : "#10b981"}
        >
          {file.type === "input" ? "Input File" : "Output File"}
        </Typography>
      </Box>
    </Box>

    {/* Right Section - Button centered vertically */}
    <Box
      display="flex"
      alignItems="center"
    >
      <Button
        variant="outlined"
        size="small"
        startIcon={<Download />}
        sx={{
          borderColor: file.color,
          color: file.color,
          "&:hover": {
            backgroundColor: `${file.color}11`,
            borderColor: file.color,
          },
        }}
      >
        Download
      </Button>
    </Box>
  </Box>
);


const ProcessFiles = ({ fileItems, gradient }) => {
  const inputFiles = fileItems.filter((file) => file.type === "input");
  const outputFiles = fileItems.filter((file) => file.type === "output");

  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        height: "100%",
        background:
          gradient || "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
        width: "100%", // Ensure full width
        mb: 3, // Add margin bottom for spacing
      }}
    >
      <Box
        sx={{
          bgcolor: "#a1c4fd",
          py: 1.5,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="700" color="white">
          <Description sx={{ verticalAlign: "middle", mr: 1 }} />
          Input / Output Files
        </Typography>
      </Box>
      <Box p={2}>
        <Box display="flex" justifyContent="center">
          <Grid container spacing={3} maxWidth="md">
            <Grid item xs={12} md={6}>
              <Typography
                variant="subtitle1"
                fontWeight="700"
                mb={1}
                color="#3b82f6"
              >
                Input Files
              </Typography>
              {inputFiles.map((file) => (
                <FileItem key={file.id} file={file} />
              ))}
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="subtitle1"
                fontWeight="700"
                mb={1}
                color="#10b981"
              >
                Output Files
              </Typography>
              {outputFiles.map((file) => (
                <FileItem key={file.id} file={file} />
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProcessFiles;

// import React from "react";
// import { Box, Grid, Typography, Paper, Button } from "@mui/material";
// import { Description, Download } from "@mui/icons-material";

// const FileItem = ({ file }) => (
//   <Box
//     sx={{
//       bgcolor: "white",
//       borderRadius: 2,
//       p: 1.5,
//       mb: 1.5,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       cursor: "pointer",
//       transition: "all 0.2s",
//       borderLeft: `4px solid ${file.color}`,
//       "&:hover": {
//         transform: "translateX(5px)",
//         boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//       },
//     }}
//   >
//     <Box display="flex" alignItems="center">
//       <Description
//         sx={{
//           color: file.color,
//           mr: 1.5,
//           fontSize: "1.8rem",
//         }}
//       />
//       <Box>
//         <Typography variant="body2" fontWeight="600">
//           {file.name}
//         </Typography>
//         <Typography
//           variant="caption"
//           color={file.type === "input" ? "#3b82f6" : "#10b981"}
//         >
//           {file.type === "input" ? "Input File" : "Output File"}
//         </Typography>
//       </Box>
//     </Box>
//     <Button
//       variant="outlined"
//       size="small"
//       startIcon={<Download />}
//       sx={{
//         borderColor: file.color,
//         color: file.color,
//         "&:hover": {
//           backgroundColor: `${file.color}11`,
//           borderColor: file.color,
//         },
//       }}
//     >
//       Download
//     </Button>
//   </Box>
// );

// const ProcessFiles = ({ fileItems, gradient }) => {
//   const inputFiles = fileItems.filter((file) => file.type === "input");
//   const outputFiles = fileItems.filter((file) => file.type === "output");

//   return (
//     <Paper
//       elevation={6}
//       sx={{
//         borderRadius: 4,
//         overflow: "hidden",
//         height: "100%",
//         background:
//           gradient || "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
//         boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
//         width: "100%", // Ensure full width
//         mb: 3, // Add margin bottom for spacing
//       }}
//     >
//       <Box
//         sx={{
//           bgcolor: "#a1c4fd",
//           py: 1.5,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h6" fontWeight="700" color="white">
//           <Description sx={{ verticalAlign: "middle", mr: 1 }} />
//           Input / Output Files
//         </Typography>
//       </Box>
//       <Box p={2}>
//         <Grid container spacing={3}>
//           {/* Input Files - Full width */}
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="subtitle1"
//               fontWeight="700"
//               mb={1}
//               color="#3b82f6"
//             >
//               Input Files
//             </Typography>
//             {inputFiles.map((file) => (
//               <FileItem key={file.id} file={file} />
//             ))}
//           </Grid>

//           {/* Output Files - Full width */}
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="subtitle1"
//               fontWeight="700"
//               mb={1}
//               color="#10b981"
//             >
//               Output Files
//             </Typography>
//             {outputFiles.map((file) => (
//               <FileItem key={file.id} file={file} />
//             ))}
//           </Grid>
//         </Grid>
//       </Box>
//     </Paper>
//   );
// };

// export default ProcessFiles;
