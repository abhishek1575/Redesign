import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Paper,
  Button,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Description,
  Group,
  School,
  ArrowForward,
  Work,
  Input,
  Output,
  ExpandMore,
  ExpandLess,
  TrendingUp,
  VerifiedUser,
  Palette,
  Code,
  Checklist,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const ProcessAreaPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState({
    workflow: true,
    description: true,
    purpose: true,
    files: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Stakeholder data
  const stakeholders = [
    {
      id: 1,
      role: "Project Manager",
      responsibilities: "Overall project oversight",
    },
    {
      id: 2,
      role: "Software Engineer",
      responsibilities: "Implementation and testing",
    },
    {
      id: 3,
      role: "Functional Safety Manager",
      responsibilities: "Safety compliance",
    },
    {
      id: 4,
      role: "Configuration Manager",
      responsibilities: "Version control and releases",
    },
  ];

  // Competence data
  const competencies = [
    { id: 1, name: "Technical Skills", level: 4, icon: <Code /> },
    { id: 2, name: "Process Knowledge", level: 3, icon: <TrendingUp /> },
    { id: 3, name: "Collaboration", level: 5, icon: <Group /> },
    { id: 4, name: "Quality Assurance", level: 4, icon: <VerifiedUser /> },
    { id: 5, name: "Problem Solving", level: 4, icon: <Checklist /> },
  ];

  // File data
  const inputFiles = [
    { id: 1, name: "System Requirements Specification", size: "1.2 MB" },
    { id: 2, name: "Software Architecture Document", size: "0.8 MB" },
    { id: 3, name: "Interface Control Document", size: "0.5 MB" },
  ];

  const outputFiles = [
    { id: 1, name: "Software Design Document", size: "1.5 MB" },
    { id: 2, name: "Unit Test Report", size: "0.9 MB" },
    { id: 3, name: "Integration Test Plan", size: "1.1 MB" },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7f1 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Page Header with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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
            SWE.1 - Software Requirements Analysis
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Software Engineering Process Group
          </Typography>
        </Box>
      </motion.div>

      {/* Two Side-by-Side Boxes */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {/* Left Box (3/4 width) */}
        <Box
          sx={{
            flex: 3,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Workflow Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
                border: "1px solid rgba(74, 111, 165, 0.15)",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(90deg, #4a6fa5, #6b9ac4)",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => toggleSection("workflow")}
              >
                <Typography variant="h6" fontWeight="600">
                  <Description sx={{ verticalAlign: "middle", mr: 1 }} />
                  Workflow Process
                </Typography>
                {expanded.workflow ? <ExpandLess /> : <ExpandMore />}
              </Box>
              <Collapse in={expanded.workflow}>
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      sx={{
                        width: "100%",
                        height: 200,
                        background: "linear-gradient(45deg, #ffffff, #f8f9fa)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px dashed #4a6fa5",
                        boxShadow: "inset 0 0 15px rgba(74, 111, 165, 0.1)",
                      }}
                    >
                      <Typography variant="h6" color="#718096" fontWeight="600">
                        Workflow Diagram
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      paragraph
                      color="text.secondary"
                      sx={{ textAlign: "left" }}
                    >
                      The workflow for software requirements analysis involves
                      gathering, analyzing, documenting, and validating
                      requirements to ensure they are clear, complete,
                      consistent, and testable.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
                      <strong>Key steps include:</strong>
                    </Typography>
                    <Box
                      component="ul"
                      sx={{ pl: 3, mt: 1, textAlign: "left" }}
                    >
                      {[
                        "Requirement elicitation from stakeholders",
                        "Analysis of requirements for feasibility",
                        "Documentation in requirement specifications",
                        "Validation through reviews and prototyping",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Typography variant="body1" color="text.secondary">
                            {item}
                          </Typography>
                        </motion.li>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Collapse>
            </Paper>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
                border: "1px solid rgba(91, 164, 164, 0.15)",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(90deg, #5ba4a4, #7bc0c0)",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => toggleSection("description")}
              >
                <Typography variant="h6" fontWeight="600">
                  <Description sx={{ verticalAlign: "middle", mr: 1 }} />
                  Description
                </Typography>
                {expanded.description ? <ExpandLess /> : <ExpandMore />}
              </Box>
              <Collapse in={expanded.description}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ textAlign: "left" }}>
                    The Software Requirements Analysis process involves
                    transforming stakeholder requirements into a complete set of
                    software requirements that can be used as the basis for
                    software design.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ textAlign: "left" }}>
                    This process ensures that requirements are analyzed for
                    feasibility, consistency, and testability. It also involves
                    establishing traceability between system requirements and
                    software requirements.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: "left" }}>
                    The output of this process is a Software Requirements
                    Specification (SRS) document that clearly defines what the
                    software must do.
                  </Typography>
                </Box>
              </Collapse>
            </Paper>
          </motion.div>

          {/* Purpose Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
                border: "1px solid rgba(235, 176, 114, 0.15)",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(90deg, #ebb072, #f5c58b)",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => toggleSection("purpose")}
              >
                <Typography variant="h6" fontWeight="600">
                  <Description sx={{ verticalAlign: "middle", mr: 1 }} />
                  Purpose
                </Typography>
                {expanded.purpose ? <ExpandLess /> : <ExpandMore />}
              </Box>
              <Collapse in={expanded.purpose}>
                <Box sx={{ p: 3 }}>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ textAlign: "left" }}>
                    The primary purpose of software requirements analysis is to
                    transform stakeholder requirements into a complete,
                    consistent, and testable set of software requirements.
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ textAlign: "left" }}>
                    <strong>This process aims to:</strong>
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mt: 1, textAlign: "left" }}>
                    {[
                      "Ensure requirements are clear and unambiguous",
                      "Identify potential conflicts or inconsistencies",
                      "Establish traceability to system requirements",
                      "Create a foundation for software design and testing",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Typography variant="body1" color="text.secondary">
                          {item}
                        </Typography>
                      </motion.li>
                    ))}
                  </Box>
                </Box>
              </Collapse>
            </Paper>
          </motion.div>

          {/* Input/Output Files Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
                border: "1px solid rgba(157, 115, 180, 0.15)",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(90deg, #9d73b4, #b491c9)",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => toggleSection("files")}
              >
                <Typography variant="h6" fontWeight="600">
                  <Description sx={{ verticalAlign: "middle", mr: 1 }} />
                  Input & Output Files
                </Typography>
                {expanded.files ? <ExpandLess /> : <ExpandMore />}
              </Box>
              <Collapse in={expanded.files}>
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={3}>
                    {/* Input Files */}
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          background:
                            "linear-gradient(90deg, #4a6fa5, #6b9ac4)",
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
                              elevation={0}
                              sx={{
                                mb: 1.5,
                                borderRadius: 2,
                                background:
                                  "linear-gradient(145deg, #ffffff, #f8f9fa)",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                                borderLeft: "4px solid #4a6fa5",
                                transition: "transform 0.3s",
                                "&:hover": {
                                  transform: "translateX(5px)",
                                  boxShadow:
                                    "0 6px 15px rgba(74, 111, 165, 0.15)",
                                },
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
                                  primaryTypographyProps={{
                                    color: "text.primary",
                                  }}
                                  secondary={`Size: ${file.size}`}
                                  secondaryTypographyProps={{
                                    color: "text.secondary",
                                  }}
                                />
                                <Button
                                  variant="outlined"
                                  size="small"
                                  sx={{
                                    borderColor: "#4a6fa5",
                                    color: "#4a6fa5",
                                    "&:hover": {
                                      backgroundColor:
                                        "rgba(74, 111, 165, 0.1)",
                                      borderColor: "#4a6fa5",
                                    },
                                  }}
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
                          background:
                            "linear-gradient(90deg, #5ba4a4, #7bc0c0)",
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
                              elevation={0}
                              sx={{
                                mb: 1.5,
                                borderRadius: 2,
                                background:
                                  "linear-gradient(145deg, #ffffff, #f8f9fa)",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                                borderLeft: "4px solid #5ba4a4",
                                transition: "transform 0.3s",
                                "&:hover": {
                                  transform: "translateX(5px)",
                                  boxShadow:
                                    "0 6px 15px rgba(91, 164, 164, 0.15)",
                                },
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
                                  primaryTypographyProps={{
                                    color: "text.primary",
                                  }}
                                  secondary={`Size: ${file.size}`}
                                  secondaryTypographyProps={{
                                    color: "text.secondary",
                                  }}
                                />
                                <Button
                                  variant="outlined"
                                  size="small"
                                  sx={{
                                    borderColor: "#5ba4a4",
                                    color: "#5ba4a4",
                                    "&:hover": {
                                      backgroundColor:
                                        "rgba(91, 164, 164, 0.1)",
                                      borderColor: "#5ba4a4",
                                    },
                                  }}
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
              </Collapse>
            </Paper>
          </motion.div>
        </Box>

        {/* Right Box (1/4 width) */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Empty Box Above Stakeholder Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                minHeight: 280,
                boxShadow: "0 4px 12px rgba(149, 157, 165, 0.08)",
                border: "1px solid rgba(74, 111, 165, 0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Empty content */}
            </Paper>
          </motion.div>

          {/* Stakeholders Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
                border: "1px solid rgba(91, 164, 164, 0.15)",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(90deg, #5ba4a4, #7bc0c0)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
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
                        elevation={0}
                        sx={{
                          mb: 1.5,
                          borderRadius: 2,
                          background:
                            "linear-gradient(145deg, #ffffff, #f8f9fa)",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                          borderLeft: "3px solid #5ba4a4",
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "translateX(5px)",
                            boxShadow: "0 6px 15px rgba(91, 164, 164, 0.15)",
                          },
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
                            primaryTypographyProps={{
                              color: "text.primary",
                              fontWeight: "500",
                            }}
                            secondary={stakeholder.responsibilities}
                            secondaryTypographyProps={{
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                      </Paper>
                    </motion.div>
                  ))}
                </List>
              </Box>
            </Paper>
          </motion.div>

          {/* Work Competence Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
                border: "1px solid rgba(235, 176, 114, 0.15)",
              }}
            >
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(90deg, #ebb072, #f5c58b)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <School sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="600">
                  Work Competence
                </Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                <List>
                  {competencies.map((competence, index) => (
                    <motion.div
                      key={competence.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          mb: 1.5,
                          borderRadius: 2,
                          background:
                            "linear-gradient(145deg, #ffffff, #f8f9fa)",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                          borderLeft: "3px solid #ebb072",
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "translateX(5px)",
                            boxShadow: "0 6px 15px rgba(235, 176, 114, 0.15)",
                          },
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "#ebb072" }}>
                              {competence.icon}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={competence.name}
                            primaryTypographyProps={{
                              color: "text.primary",
                              fontWeight: "500",
                            }}
                            secondary={`Level: ${competence.level}/5`}
                            secondaryTypographyProps={{
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                        <Box sx={{ px: 2, pb: 1 }}>
                          <Box
                            component={motion.div}
                            initial={{ width: 0 }}
                            animate={{ width: `${competence.level * 20}%` }}
                            transition={{ duration: 1, delay: 0.2 * index }}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              background:
                                "linear-gradient(90deg, #ebb072, #f5c58b)",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          />
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </List>
              </Box>
            </Paper>
          </motion.div>

          {/* Next Step Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                py: 2,
                borderRadius: 3,
                background: "linear-gradient(45deg, #9d73b4, #b491c9)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.1rem",
                boxShadow: "0 6px 15px rgba(157, 115, 180, 0.3)",
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 20px rgba(157, 115, 180, 0.4)",
                  background: "linear-gradient(45deg, #b491c9, #9d73b4)",
                },
              }}
            >
              Continue to SWE.2
              <Box
                component="span"
                sx={{
                  ml: 1,
                  fontSize: "0.7rem",
                  backgroundColor: "#d9534f",
                  borderRadius: "50%",
                  width: 22,
                  height: 22,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                !
              </Box>
            </Button>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                mt: 1,
                display: "block",
                textAlign: "center",
              }}
            >
              <Box
                component="span"
                sx={{ color: "#d9534f", fontWeight: "bold" }}
              >
                *
              </Box>{" "}
              Mandatory next step
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default ProcessAreaPage;
