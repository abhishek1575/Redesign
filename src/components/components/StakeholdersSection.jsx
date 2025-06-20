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
    <Paper sx={paperStyles("rgba(91, 164, 164, 0.15)")}>
      <Box sx={sectionHeaderStyles("#5ba4a4", "#7bc0c0")}>
        <Group sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight="600">
          Stakeholders
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <List>
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Paper
                sx={{
                  mb: 1.5,
                  borderRadius: 2,
                  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  borderLeft: "3px solid #5ba4a4",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateX(5px)" },
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#5ba4a4" }}>
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
