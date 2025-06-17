import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { InsertChart } from "@mui/icons-material";

const ProcessDiagram = ({ title, description, gradient }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        background:
          gradient || "linear-gradient(135deg, #fdf4ff 0%, #ede9fe 100%)",
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        width: "100%",
        mb: 3,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Header with gradient strip and icon */}
      <Box
        sx={{
          background: "linear-gradient(90deg,rgb(193, 172, 243) 0%,rgb(109, 162, 247) 100%)",
          py: 2,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InsertChart sx={{ color: "white", mr: 1 }} />
        <Typography variant="h6" fontWeight="700" color="white">
          Process Diagram
        </Typography>
      </Box>

      {/* Content Box */}
      <Box p={{ xs: 2, sm: 3 }} textAlign="center">
        {/* Visual Container */}
        <Box
          sx={{
            width: "100%",
            height: 220,
            borderRadius: 3,
            background: "linear-gradient(145deg, #ffffff, #f0f4ff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed #8b5cf6",
            position: "relative",
            mb: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(148, 125, 202, 0.05), rgba(139,92,246,0.15))",
              borderRadius: 3,
              zIndex: 1,
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="700"
            sx={{ color: "#4f46e5", position: "relative", zIndex: 2 }}
          >
            {title}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="left"
          sx={{ px: 1, fontSize: "1rem", lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ProcessDiagram;

// import React from "react";
// import { Box, Typography, Paper } from "@mui/material";
// import { InsertChart } from "@mui/icons-material";

// const ProcessDiagram = ({ title, description, gradient }) => {
//   return (
//     <Paper
//       elevation={6}
//       sx={{
//         borderRadius: 4,
//         overflow: "hidden",
//         height: "100%",
//         background:
//           gradient || "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
//         boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
//         width: "100%", // Ensure full width
//         mb: 3, // Add margin bottom for spacing
//       }}
//     >
//       <Box
//         sx={{
//           bgcolor: "#fcb69f",
//           py: 1.5,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h6" fontWeight="700" color="white">
//           <InsertChart sx={{ verticalAlign: "middle", mr: 1 }} />
//           Process Diagram
//         </Typography>
//       </Box>
//       <Box p={2} textAlign="center">
//         <Box
//           sx={{
//             width: "100%",
//             height: 220,
//             background: "linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)",
//             borderRadius: 3,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             border: "2px dashed #fcb69f",
//             mb: 2,
//           }}
//         >
//           <Typography variant="h6" color="#718096" fontWeight="600">
//             {title}
//           </Typography>
//         </Box>
//         <Typography variant="body2" color="#4a5568" textAlign="left">
//           {description}
//         </Typography>
//       </Box>
//     </Paper>
//   );
// };

// export default ProcessDiagram;
