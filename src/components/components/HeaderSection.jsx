// import React from "react";
// import { Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";
// import { fadeInUp } from "../anim/entranceAnimations";
// import processes  from "../data/processes";

// const HeaderSection = () => (
//   <motion.div {...fadeInUp}>
//     <Box textAlign="center" mb={4}>
//       <Typography
//         variant="h4"
//         fontWeight="800"
//         gutterBottom
//         sx={{
//           background: "linear-gradient(45deg, #4a6fa5, #6b9ac4)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           textShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           position: "relative",
//           display: "inline-block",
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             bottom: -5,
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "60%",
//             height: 3,
//             background: "linear-gradient(90deg, #4a6fa5, #6b9ac4)",
//             borderRadius: 2,
//           },
//         }}
//       >
//         {title}
//       </Typography>
//       <Typography variant="subtitle1" color="text.secondary">
//         {subtitle}
//       </Typography>
//     </Box>
//   </motion.div>
// );

// export default HeaderSection;

import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../anim/entranceAnimations";

const HeaderSection = ({ title, subtitle }) => (
  <motion.div {...fadeInUp}>
    <Box textAlign="center" mb={4}>
      <Typography
        variant="h4"
        fontWeight="800"
        gutterBottom
        sx={{
          background: "linear-gradient(45deg, #4a6fa5, #6b9ac4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 3,
            background: "linear-gradient(90deg, #4a6fa5, #6b9ac4)",
            borderRadius: 2,
          },
        }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  </motion.div>
);

export default HeaderSection;
