import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { Description } from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeInLeft } from "../anim/entranceAnimations";
import { descriptionContent } from "../data/swe1";
import {
  sectionHeaderStyles,
  sectionContentStyles,
  paperStyles,
} from "../styles/sectionStyles";

const DescriptionSection = () => (
  <motion.div {...fadeInLeft}>
    <Paper sx={paperStyles("rgba(100, 181, 246, 0.15)")}>
      <Box sx={sectionHeaderStyles("#1976d2", "#64b5f6")}>
        <Typography variant="h6" fontWeight="600" sx={{ flex: 1, textAlign: "center" }}>
          <Description sx={{ verticalAlign: "middle", mr: 1 }} />
          Description
        </Typography>
      </Box>
      <Box sx={sectionContentStyles}>
        {descriptionContent.map((paragraph, index) => (
          <Typography
            key={index}
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>
    </Paper>
  </motion.div>
);

export default DescriptionSection;

// import React from "react";
// import { Typography, Box, Collapse, Paper } from "@mui/material";
// import { Description, ExpandMore, ExpandLess } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { fadeInLeft } from "../anim/entranceAnimations";
// import { descriptionContent } from "../data/processData";
// import {
//   sectionHeaderStyles,
//   sectionContentStyles,
//   paperStyles,
// } from "../styles/sectionStyles";

// const DescriptionSection = ({ expanded, toggleSection }) => (
//   <motion.div {...fadeInLeft}>
//     <Paper sx={paperStyles("rgba(91, 164, 164, 0.15)")}>
//       <Box
//         sx={sectionHeaderStyles("#5ba4a4", "#7bc0c0")}
//         // onClick={toggleSection}
//       >
//         <Typography variant="h6" fontWeight="600">
//           <Description sx={{ verticalAlign: "middle", mr: 1 }} />
//           Description
//         </Typography>
//         {expanded ? <ExpandLess /> : <ExpandMore />}
//       </Box>
//       {/* <Collapse in={expanded}> */}
//         <Box sx={sectionContentStyles}>
//           {descriptionContent.map((paragraph, index) => (
//             <Typography
//               key={index}
//               variant="body1"
//               paragraph
//               color="text.secondary"
//               sx={{ textAlign: "left" }}
//             >
//               {paragraph}
//             </Typography>
//           ))}
//         </Box>
//       {/* </Collapse> */}
//     </Paper>
//   </motion.div>
// );

// export default DescriptionSection;
