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
import {
  School,
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeInRight } from "../anim/entranceAnimations";
import { sectionHeaderStyles, paperStyles } from "../styles/sectionStyles";

const iconComponents = {
  Code: Code,
  TrendingUp: TrendingUp,
  Group: Group,
  VerifiedUser: VerifiedUser,
  Checklist: Checklist,
};

const CompetenceSection = ({ competencies }) => (
  <motion.div {...fadeInRight}>
    <Paper sx={paperStyles("rgba(100, 181, 246, 0.15)")}>
      <Box sx={sectionHeaderStyles("#1976d2", "#64b5f6")}>
        <School sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{ flex: 1, textAlign: "center" }}
        >
          Work Competence
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <List>
          {competencies.map((competence) => {
            const IconComponent = competence.icon;
            return (
              <motion.div
                key={competence.id}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ marginBottom: 12, borderRadius: 16 }}
              >
                <Paper
                  sx={{
                    borderRadius: 2,
                    background: "linear-gradient(145deg, #e3f2fd, #ffffff)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    borderLeft: "3px solid #1976d2",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#1976d2" }}>
                        <IconComponent />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={competence.name} />
                  </ListItem>
                </Paper>
              </motion.div>
            );
          })}
        </List>
      </Box>
    </Paper>
  </motion.div>
);

export default CompetenceSection;

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
// import {
//   School,
//   Code,
//   TrendingUp,
//   Group,
//   VerifiedUser,
//   Checklist,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { fadeInRight } from "../anim/entranceAnimations";
// import { competencies } from "../data/competenceData";
// import { sectionHeaderStyles, paperStyles } from "../styles/sectionStyles";

// const iconComponents = {
//   Code: Code,
//   TrendingUp: TrendingUp,
//   Group: Group,
//   VerifiedUser: VerifiedUser,
//   Checklist: Checklist,
// };

// const CompetenceSection = () => (
//   <motion.div {...fadeInRight}>
//     <Paper sx={paperStyles("rgba(235, 176, 114, 0.15)")}>
//       <Box sx={sectionHeaderStyles("#ebb072", "#f5c58b")}>
//         <School sx={{ mr: 1 }} />
//         <Typography variant="h6" fontWeight="600"  sx={{flex: 1, textAlign: "center" }}>
//           Work Competence
//         </Typography>
//       </Box>
//       <Box sx={{ p: 2 }}>
//         <List>
//           {competencies.map((competence, index) => {
//             const IconComponent = competence.icon;
//             return (
//               <motion.div
//                 key={competence.id}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * index }}
//               >
//                 <Paper
//                   sx={{
//                     mb: 1.5,
//                     borderRadius: 2,
//                     background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
//                     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//                     borderLeft: "3px solid #ebb072",
//                     transition: "transform 0.3s",
//                     "&:hover": { transform: "translateX(5px)" },
//                   }}
//                 >
//                   <ListItem>
//                     <ListItemAvatar>
//                       <Avatar sx={{ bgcolor: "#ebb072" }}>
//                         <IconComponent />
//                       </Avatar>
//                     </ListItemAvatar>
//                     <ListItemText
//                       primary={competence.name}
//                       secondary={`Level: ${competence.level}/5`}
//                     />
//                   </ListItem>
//                   <Box sx={{ px: 2, pb: 1 }}>
//                     <Box
//                       component={motion.div}
//                       initial={{ width: 0 }}
//                       animate={{ width: `${competence.level * 20}%` }}
//                       transition={{ duration: 1, delay: 0.2 * index }}
//                       sx={{
//                         height: 6,
//                         borderRadius: 3,
//                         background: "linear-gradient(90deg, #ebb072, #f5c58b)",
//                         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                       }}
//                     />
//                   </Box>
//                 </Paper>
//               </motion.div>
//             );
//           })}
//         </List>
//       </Box>
//     </Paper>
//   </motion.div>
// );

// export default CompetenceSection;
