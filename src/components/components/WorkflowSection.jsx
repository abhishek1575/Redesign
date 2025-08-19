import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { Description} from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeInLeft } from "../anim/entranceAnimations";
import { workflowContent } from "../data/processData";
import {
  sectionHeaderStyles,
  sectionContentStyles,
  paperStyles,
} from "../styles/sectionStyles";

const WorkflowSection = () => (
  <motion.div {...fadeInLeft}>
    <Paper sx={paperStyles("rgba(58, 96, 115, 0.13)")}>
      <Box sx={sectionHeaderStyles("#1A83B7", "#6AC8F8")}>
        <Typography variant="h6" fontWeight="600" sx={{ flex: 1, textAlign: "center" }}>
          <Description
            sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }}
          />
          Workflow Process
        </Typography>
      </Box>
      <Box sx={sectionContentStyles}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            sx={{
              width: "100%",
              height: 200,
              background: "linear-gradient(45deg, #e0eafc, #cfdef3)",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed #3a6073",
              boxShadow: "inset 0 0 15px rgba(58, 96, 115, 0.08)",
            }}
          >
            <Typography variant="h6" color="#3a6073" fontWeight="600">
              Workflow Diagram
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          paragraph
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          {workflowContent.description}
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
          <strong>Key steps include:</strong>
        </Typography>
        <Box
          component="ul"
          sx={{ pl: 3, mt: 1, listStyle: "disc", color: "#3a6073" }}
        >
          {workflowContent.steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              style={{ color: "#3a6073" }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textAlign: "left" }}
              >
                {step}
              </Typography>
            </motion.li>
          ))}
        </Box>
      </Box>
    </Paper>
  </motion.div>
);

export default WorkflowSection;

// import React from "react";
// import { Typography, Box, Collapse, Paper } from "@mui/material";
// import { Description, ExpandMore, ExpandLess } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { fadeInLeft } from "../anim/entranceAnimations";
// import { workflowContent } from "../data/processData";
// import {
//   sectionHeaderStyles,
//   sectionContentStyles,
//   paperStyles,
// } from "../styles/sectionStyles";

// const WorkflowSection = ({ expanded, toggleSection }) => (
//   <motion.div {...fadeInLeft}>
//     <Paper sx={paperStyles("rgba(74, 111, 165, 0.15)")}>
//       <Box
//         sx={sectionHeaderStyles("#4a6fa5", "#6b9ac4")}
//         onClick={toggleSection}
//       >
//         <Typography variant="h6" fontWeight="600">
//           <Description sx={{ verticalAlign: "middle", mr: 1 }} />
//           Workflow Process
//         </Typography>
//         {expanded ? <ExpandLess /> : <ExpandMore />}
//       </Box>
//       <Collapse in={expanded}>
//         <Box sx={sectionContentStyles}>
//           <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
//             <Box
//               component={motion.div}
//               whileHover={{ scale: 1.02 }}
//               sx={{
//                 width: "100%",
//                 height: 200,
//                 background: "linear-gradient(45deg, #ffffff, #f8f9fa)",
//                 borderRadius: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 border: "1px dashed #4a6fa5",
//                 boxShadow: "inset 0 0 15px rgba(74, 111, 165, 0.1)",
//               }}
//             >
//               <Typography variant="h6" color="#718096" fontWeight="600">
//                 Workflow Diagram
//               </Typography>
//             </Box>
//           </Box>
//           <Typography
//             variant="body1"
//             paragraph
//             color="text.secondary"
//             sx={{ textAlign: "left" }}
//           >
//             {workflowContent.description}
//           </Typography>
//           <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
//             <strong>Key steps include:</strong>
//           </Typography>
//           <Box
//             component="ul"
//             sx={{ pl: 3, mt: 1, listStyle: "disc", color: "#4a6fa5" }}
//           >
//             {workflowContent.steps.map((step, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 style={{ color: "#4a6fa5" }}
//               >
//                 <Typography
//                   variant="body1"
//                   color="text.secondary"
//                   sx={{ textAlign: "left" }}
//                 >
//                   {step}
//                 </Typography>
//               </motion.li>
//             ))}
//           </Box>
//         </Box>
//       </Collapse>
//     </Paper>
//   </motion.div>
// );

// export default WorkflowSection;
