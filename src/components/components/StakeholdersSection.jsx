import React from "react";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { Group, Work } from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeInRight } from "../anim/entranceAnimations";
import { stakeholders } from "../data/stakeholderData";
import { sectionHeaderStyles, paperStyles } from "../styles/sectionStyles";

const StakeholdersSection = () => (
  <motion.div {...fadeInRight}>
    <Paper sx={paperStyles("rgba(44, 62, 80, 0.12)")}>
      <Box sx={sectionHeaderStyles("#16a085", "#69E6CD")}>
        {/*"#2c3e50", "#16a085"*/}
        <Group sx={{ mr: 1, color: "#fff" }} />
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{ flex: 1, textAlign: "center", color: "#fff" }}
        >
          Stakeholders
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <List>
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 120,
              }}
            >
              <Paper
                sx={{
                  mb: 1.5,
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                  boxShadow: "0 4px 12px rgba(44,62,80,0.08)",
                  borderLeft: "4px solidrgb(24, 162, 135)",
                  transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
                  "&:hover": {
                    transform: "scale(1.04)",
                    boxShadow: "0 6px 18px rgba(22,160,133,0.15)",
                  },
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#16a085" }}>
                      <Work />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={stakeholder.role}
                    secondary={stakeholder.responsibilities}
                  />
                </ListItem>
              </Paper>
            </motion.div>
          ))}
        </List>
      </Box>
    </Paper>
  </motion.div>
);

export default StakeholdersSection;

// import React from "react";
// import {
//   Typography,
//   Box,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemAvatar,
//   Avatar,
// } from "@mui/material";
// import { Group, Work } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { fadeInRight } from "../anim/entranceAnimations";
// import { stakeholders } from "../data/stakeholderData";
// import { sectionHeaderStyles, paperStyles } from "../styles/sectionStyles";

// const StakeholdersSection = () => (
//   <motion.div {...fadeInRight}>
//     <Paper sx={paperStyles("rgba(91, 164, 164, 0.15)")}>
//       <Box sx={sectionHeaderStyles("#5ba4a4", "#7bc0c0")}>
//         <Group sx={{ mr: 1 }} />
//         <Typography
//           variant="h6"
//           fontWeight="600"
//           sx={{ flex: 1, textAlign: "center" }}
//         >
//           Stakeholders
//         </Typography>
//       </Box>
//       <Box sx={{ p: 2 }}>
//         <List>
//           {stakeholders.map((stakeholder, index) => (
//             <motion.div
//               key={stakeholder.id}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <Paper
//                 sx={{
//                   mb: 1.5,
//                   borderRadius: 2,
//                   background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
//                   boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//                   borderLeft: "3px solid #5ba4a4",
//                   transition: "transform 0.3s",
//                   "&:hover": { transform: "translateX(5px)" },
//                 }}
//               >
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar sx={{ bgcolor: "#5ba4a4" }}>
//                       <Work />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={stakeholder.role}
//                     secondary={stakeholder.responsibilities}
//                   />
//                 </ListItem>
//               </Paper>
//             </motion.div>
//           ))}
//         </List>
//       </Box>
//     </Paper>
//   </motion.div>
// );

// export default StakeholdersSection;
