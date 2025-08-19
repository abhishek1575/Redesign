import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { Description} from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeInLeft } from "../anim/entranceAnimations";
import { purposeContent } from "../data/processData";
import {
  sectionHeaderStyles,
  sectionContentStyles,
  paperStyles,
} from "../styles/sectionStyles";

const PurposeSection = () => (
  <motion.div {...fadeInLeft}>
    <Paper sx={paperStyles("rgba(235, 176, 114, 0.15)")}>
      <Box
        sx={sectionHeaderStyles("#ebb072", "#f5c58b")}
        // onClick={toggleSection}
      >
        <Typography variant="h6" fontWeight="600" sx={{ flex: 1, textAlign: "center" }}>
          <Description sx={{ verticalAlign: "middle", mr: 1 }} />
          Purpose
        </Typography>
       
      </Box>
     
        <Box sx={sectionContentStyles}>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ textAlign: "left" }}>
            {purposeContent.description}
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            <strong>This process aims to:</strong>
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 3,
              mt: 1,
              listStyleType: "disc",
              "& li::marker": {
                color: "#ebb072", // Change bullet color here
                fontSize: "1.2em",
              },
            }}
          >
            {purposeContent.objectives.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: "left" }}>
                  {item}
                </Typography>
              </motion.li>
            ))}
          </Box>
        </Box>
     
    </Paper>
  </motion.div>
);

export default PurposeSection;

