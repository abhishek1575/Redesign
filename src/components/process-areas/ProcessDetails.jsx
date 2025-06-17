import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Avatar,
} from "@mui/material";
import {
  ExpandMore,
  Description,
  Lightbulb,
  School,
  Group,
} from "@mui/icons-material";

const accordionSections = [
  {
    id: "description",
    icon: <Description sx={{ color: "#4f46e5", mr: 2 }} />,
    title: "Description",
    content: (process) => (
      <>
        <Typography
          fontSize="13px"
          variant="body1"
          component="p"
          sx={{ textAlign: "left" }}
        >
          {process.description}
        </Typography>
        <Typography fontSize="13px" variant="body1" sx={{ textAlign: "left" }}>
          {process.descriptionAdditional}
        </Typography>
      </>
    ),
  },
  {
    id: "purpose",
    icon: <Lightbulb sx={{ color: "#f59e0b", mr: 2 }} />,
    title: "Purpose",
    content: (process) => (
      <>
        <Typography
          fontSize="13px"
          variant="body1"
          component="p"
          sx={{ textAlign: "left" }}
        >
          {process.purpose}
        </Typography>
        <br/>
        <Typography fontSize="15px" variant="body1" sx={{ textAlign: "left" }}>
          <strong>Key objectives include:</strong>
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: 3,
            mt: 1,
            listStyle: "none",
            textAlign: "left",
          }}
        >
          {process.objectives.map((obj, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                mb: 1,
              }}
            >
              <Box
                sx={{
                  mt: "6px",
                  width: 8,
                  height: 8,
                  bgcolor: "#f59e0b", // same as your Purpose icon color
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <Typography fontSize="13px" variant="body1">
                {obj}
              </Typography>
            </Box>
          ))}
        </Box>
      </>
    ),
  },
  {
    id: "bestPractices",
    icon: <School sx={{ color: "#10b981", mr: 2 }} />,
    title: "Best Practices",
    content: (process) => (
      <>
        <Typography
          fontSize="13px"
          variant="body1"
          component="p"
          sx={{ textAlign: "left" }}
        >
          {process.bestPracticesIntro}
        </Typography>
        <br/>
        <Grid container spacing={2}>
          {process.bestPractices.map((practice, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  bgcolor: practice.bgColor,
                  p: 2,
                  borderRadius: 2,
                  borderLeft: `4px solid ${practice.color}`,
                }}
              >
                <Typography
                  fontSize="14px"
                  variant="subtitle1"
                  fontWeight="700"
                  gutterBottom
                >
                  {practice.title}
                </Typography>
                <Typography fontSize="13px" variant="body2">
                  {practice.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </>
    ),
  },
  {
    id: "competence",
    icon: <Group sx={{ color: "#8b5cf6", mr: 2 }} />,
    title: "Work Competence",
    content: (process) => (
      <>
        <Typography
          fontSize="13px"
          variant="body1"
          component="p"
          sx={{ textAlign: "left" }}
        >
          {process.competenceIntro}
        </Typography>
        <br/>
        <Box sx={{ maxWidth: "100%", px: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {process.competencies.map((comp, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Box textAlign="center">
                  <Avatar
                    sx={{
                      bgcolor: comp.bgColor,
                      color: comp.color,
                      width: 60,
                      height: 60,
                      mb: 1.5,
                      mx: "auto",
                    }}
                  >
                    <Typography variant="h5" fontWeight="800">
                      {comp.letter}
                    </Typography>
                  </Avatar>
                  <Typography fontSize="14px" variant="subtitle1" fontWeight="700">
                    {comp.title}
                  </Typography>
                  <Typography fontSize="13px" variant="body2">
                    {comp.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    ),
  },
];

const ProcessDetails = ({ process }) => {
  const [expanded, setExpanded] = useState("description");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 4,
        mb: 4,
        background: "white",
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Box sx={{ p: 3 }}>
        {accordionSections.map((section) => (
          <Accordion
            key={section.id}
            expanded={expanded === section.id}
            onChange={handleChange(section.id)}
            sx={{ borderRadius: "12px !important" }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box display="flex" alignItems="center">
                {section.icon}
                <Typography variant="h6" fontWeight="700">
                  {section.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>{section.content(process)}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
};

export default ProcessDetails;
