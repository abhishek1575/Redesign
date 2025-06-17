import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Download, ArrowDownward } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

import ProcessDiagram from "./ProcessDiagram";
import TeamRoles from "./TeamRoles";
import ProcessFiles from "./ProcessFiles";
import ProcessDetails from "../process-areas/ProcessDetails";
import processes from "../../data/processes"; // Make sure this path is correct

const ASPICEProcessPage = () => {
  const { id } = useParams();
  const process = processes[id?.toUpperCase()];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!process) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" color="error" gutterBottom>
          Process Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary">
          The requested ASPICE process could not be located.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7f1 100%)",
        minHeight: "100vh",
        py: 4,
        px: isMobile ? 1 : 0,
      }}
    >
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight="800"
            color="#2d3748"
            gutterBottom
          >
            {process.title}
          </Typography>
          <Typography variant="h6" color="#4a5568">
            {process.subtitle}
          </Typography>
        </Box>

        {/* Full Width Sections */}
        <Box mb={4}>
          <ProcessDiagram
            title={process.diagramTitle}
            description={process.diagramDescription}
            gradient={process.diagramGradient}
          />

          <TeamRoles roles={process.roles} gradient={process.rolesGradient} />

          <ProcessFiles
            fileItems={process.fileItems}
            gradient={process.filesGradient}
          />
        </Box>

        {/* Process Details Section */}
        <ProcessDetails process={process} />

        {/* Download Button */}
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Download />}
            endIcon={<ArrowDownward />}
            sx={{
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
              color: "white",
              py: 2,
              px: 6,
              borderRadius: 3,
              fontWeight: "700",
              fontSize: "1.1rem",
              boxShadow: "0 6px 15px rgba(79, 70, 229, 0.4)",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(79, 70, 229, 0.5)",
                background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
              },
            }}
          >
            {process.downloadButtonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ASPICEProcessPage;

// import React from "react";
// import { Box, Container, Typography, Button, Grid } from "@mui/material";
// import { Download, ArrowDownward } from "@mui/icons-material";
// import ProcessDiagram from "./ProcessDiagram";
// import TeamRoles from "./TeamRoles";
// import ProcessFiles from "./ProcessFiles";
// import ProcessDetails from "../process-areas/ProcessDetails";
// import { useTheme, useMediaQuery } from "@mui/material";

// const ASPICEProcessPage = ({ process }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7f1 100%)",
//         minHeight: "100vh",
//         py: 4,
//         px: isMobile ? 1 : 0,
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* Page Header */}
//         <Box textAlign="center" mb={4}>
//           <Typography
//             variant="h4"
//             fontWeight="800"
//             color="#2d3748"
//             gutterBottom
//           >
//             {process.title}
//           </Typography>
//           <Typography variant="h6" color="#4a5568">
//             {process.subtitle}
//           </Typography>
//         </Box>

//         {/* Full Width Sections */}
//         <Box mb={4}>
//           {/* Diagram Section - Full width */}
//           <ProcessDiagram
//             title={process.diagramTitle}
//             description={process.diagramDescription}
//             gradient={process.diagramGradient}
//           />

//           {/* Team Roles Section - Full width */}
//           <TeamRoles roles={process.roles} gradient={process.rolesGradient} />

//           {/* Files Section - Full width */}
//           <ProcessFiles
//             fileItems={process.fileItems}
//             gradient={process.filesGradient}
//           />
//         </Box>

//         {/* Process Details Section */}
//         <ProcessDetails process={process} />

//         {/* Download Section */}
//         <Box textAlign="center" mb={4}>
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<Download />}
//             endIcon={<ArrowDownward />}
//             sx={{
//               background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
//               color: "white",
//               py: 2,
//               px: 6,
//               borderRadius: 3,
//               fontWeight: "700",
//               fontSize: "1.1rem",
//               boxShadow: "0 6px 15px rgba(79, 70, 229, 0.4)",
//               transition: "all 0.3s",
//               "&:hover": {
//                 transform: "translateY(-3px)",
//                 boxShadow: "0 10px 20px rgba(79, 70, 229, 0.5)",
//                 background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
//               },
//             }}
//           >
//             {process.downloadButtonText}
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ASPICEProcessPage;
