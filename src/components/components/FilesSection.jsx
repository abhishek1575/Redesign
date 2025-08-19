import React from "react";
import {
  Typography,
  Box,
 
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@mui/material";
import {
  Description,
  Input,
  Output,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeInLeft } from "../anim/entranceAnimations";
import { inputFiles, outputFiles } from "../data/fileData";
import {
  sectionHeaderStyles,
  sectionContentStyles,
  paperStyles,
} from "../styles/sectionStyles";
import { downloadButtonStyles } from "../styles/buttonStyles";

const FilesSection = () => (
  <motion.div {...fadeInLeft}>
    <Paper sx={paperStyles("rgba(157, 115, 180, 0.15)")}>
      <Box
        sx={sectionHeaderStyles("#9d73b4", "#b491c9")}
      >
        <Typography variant="h6" fontWeight="600" sx={{ flex: 1, textAlign: "center" }}>
          <Description sx={{ verticalAlign: "middle", mr: 1 }} />
          Input & Output Files
        </Typography>
      </Box>
      <Box sx={sectionContentStyles}>
        <Grid container spacing={3}>
            {/* Input Files */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "linear-gradient(90deg, #4a6fa5, #6b9ac4)",
                  p: 1.5,
                  borderRadius: 2,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  mb: 2,
                  boxShadow: "0 4px 12px rgba(74, 111, 165, 0.2)",
                }}
              >
                <Input sx={{ verticalAlign: "middle", mr: 1 }} />
                Input Files
              </Box>
              <List>
                {inputFiles.map((file, index) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Paper
                      sx={{
                        mb: 1.5,
                        borderRadius: 2,
                        background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        borderLeft: "4px solid #4a6fa5",
                        transition: "transform 0.3s",
                        "&:hover": { transform: "translateX(5px)" },
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#4a6fa5" }}>
                            <Description />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={file.name}
                          secondary={`Size: ${file.size}`}
                        />
                        <Button
                          variant="outlined"
                          size="small"
                          sx={downloadButtonStyles("#4a6fa5")}
                        >
                          Download
                        </Button>
                      </ListItem>
                    </Paper>
                  </motion.div>
                ))}
              </List>
            </Grid>

            {/* Output Files */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "linear-gradient(90deg, #5ba4a4, #7bc0c0)",
                  p: 1.5,
                  borderRadius: 2,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  mb: 2,
                  boxShadow: "0 4px 12px rgba(91, 164, 164, 0.2)",
                }}
              >
                <Output sx={{ verticalAlign: "middle", mr: 1 }} />
                Output Files
              </Box>
              <List>
                {outputFiles.map((file, index) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Paper
                      sx={{
                        mb: 1.5,
                        borderRadius: 2,
                        background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        borderLeft: "4px solid #5ba4a4",
                        transition: "transform 0.3s",
                        "&:hover": { transform: "translateX(5px)" },
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#5ba4a4" }}>
                            <Description />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={file.name}
                          secondary={`Size: ${file.size}`}
                        />
                        <Button
                          variant="outlined"
                          size="small"
                          sx={downloadButtonStyles("#5ba4a4")}
                        >
                          Download
                        </Button>
                      </ListItem>
                    </Paper>
                  </motion.div>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
     
    </Paper>
  </motion.div>
);

export default FilesSection;

// import React from "react";
// import {
//   Typography,
//   Box,
//   Collapse,
//   Paper,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemAvatar,
//   Avatar,
//   Button,
// } from "@mui/material";
// import {
//   Description,
//   ExpandMore,
//   ExpandLess,
//   Input,
//   Output,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { fadeInLeft } from "../anim/entranceAnimations";
// import { inputFiles, outputFiles } from "../data/fileData";
// import {
//   sectionHeaderStyles,
//   sectionContentStyles,
//   paperStyles,
// } from "../styles/sectionStyles";
// import { downloadButtonStyles } from "../styles/buttonStyles";

// const FilesSection = ({ expanded, toggleSection }) => (
//   <motion.div {...fadeInLeft}>
//     <Paper sx={paperStyles("rgba(157, 115, 180, 0.15)")}>
//       <Box
//         sx={sectionHeaderStyles("#9d73b4", "#b491c9")}
//         onClick={toggleSection}
//       >
//         <Typography variant="h6" fontWeight="600">
//           <Description sx={{ verticalAlign: "middle", mr: 1 }} />
//           Input & Output Files
//         </Typography>
//         {expanded ? <ExpandLess /> : <ExpandMore />}
//       </Box>
//       <Collapse in={expanded}>
//         <Box sx={sectionContentStyles}>
//           <Grid container spacing={3}>
//             {/* Input Files */}
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   background: "linear-gradient(90deg, #4a6fa5, #6b9ac4)",
//                   p: 1.5,
//                   borderRadius: 2,
//                   textAlign: "center",
//                   color: "white",
//                   fontWeight: "bold",
//                   mb: 2,
//                   boxShadow: "0 4px 12px rgba(74, 111, 165, 0.2)",
//                 }}
//               >
//                 <Input sx={{ verticalAlign: "middle", mr: 1 }} />
//                 Input Files
//               </Box>
//               <List>
//                 {inputFiles.map((file, index) => (
//                   <motion.div
//                     key={file.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 * index }}
//                   >
//                     <Paper
//                       sx={{
//                         mb: 1.5,
//                         borderRadius: 2,
//                         background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
//                         boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//                         borderLeft: "4px solid #4a6fa5",
//                         transition: "transform 0.3s",
//                         "&:hover": { transform: "translateX(5px)" },
//                       }}
//                     >
//                       <ListItem>
//                         <ListItemAvatar>
//                           <Avatar sx={{ bgcolor: "#4a6fa5" }}>
//                             <Description />
//                           </Avatar>
//                         </ListItemAvatar>
//                         <ListItemText
//                           primary={file.name}
//                           secondary={`Size: ${file.size}`}

//                         />
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           sx={downloadButtonStyles("#4a6fa5")}
//                         >
//                           Download
//                         </Button>
//                       </ListItem>
//                     </Paper>
//                   </motion.div>
//                 ))}
//               </List>
//             </Grid>

//             {/* Output Files */}
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   background: "linear-gradient(90deg, #5ba4a4, #7bc0c0)",
//                   p: 1.5,
//                   borderRadius: 2,
//                   textAlign: "center",
//                   color: "white",
//                   fontWeight: "bold",
//                   mb: 2,
//                   boxShadow: "0 4px 12px rgba(91, 164, 164, 0.2)",
//                 }}
//               >
//                 <Output sx={{ verticalAlign: "middle", mr: 1 }} />
//                 Output Files
//               </Box>
//               <List>
//                 {outputFiles.map((file, index) => (
//                   <motion.div
//                     key={file.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 * index }}
//                   >
//                     <Paper
//                       sx={{
//                         mb: 1.5,
//                         borderRadius: 2,
//                         background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
//                         boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//                         borderLeft: "4px solid #5ba4a4",
//                         transition: "transform 0.3s",
//                         "&:hover": { transform: "translateX(5px)" },
//                       }}
//                     >
//                       <ListItem>
//                         <ListItemAvatar>
//                           <Avatar sx={{ bgcolor: "#5ba4a4" }}>
//                             <Description />
//                           </Avatar>
//                         </ListItemAvatar>
//                         <ListItemText
//                           primary={file.name}
//                           secondary={`Size: ${file.size}`}
//                         />
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           sx={downloadButtonStyles("#5ba4a4")}
//                         >
//                           Download
//                         </Button>
//                       </ListItem>
//                     </Paper>
//                   </motion.div>
//                 ))}
//               </List>
//             </Grid>
//           </Grid>
//         </Box>
//       </Collapse>
//     </Paper>
//   </motion.div>
// );

// export default FilesSection;
