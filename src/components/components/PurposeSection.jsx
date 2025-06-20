import React from "react";
import { Typography, Box, Collapse, Paper } from "@mui/material";
import { Description, ExpandMore, ExpandLess } from "@mui/icons-material";
import { motion } from "framer-motion";
import { fadeInLeft } from "../anim/entranceAnimations";
import { purposeContent } from "../data/processData";
import {
  sectionHeaderStyles,
  sectionContentStyles,
  paperStyles,
} from "../styles/sectionStyles";

const PurposeSection = ({ expanded, toggleSection }) => (
  <motion.div {...fadeInLeft}>
    <Paper sx={paperStyles("rgba(235, 176, 114, 0.15)")}>
      <Box
        sx={sectionHeaderStyles("#ebb072", "#f5c58b")}
        // onClick={toggleSection}
      >
        <Typography variant="h6" fontWeight="600">
          <Description sx={{ verticalAlign: "middle", mr: 1 }} />
          Purpose
        </Typography>
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={expanded}>
        <Box sx={sectionContentStyles}>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ textAlign: "left" }}>
            {purposeContent.description}
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            <strong>This process aims to:</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 3, mt: 1 }}>
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
      </Collapse>
    </Paper>
  </motion.div>
);

export default PurposeSection;

