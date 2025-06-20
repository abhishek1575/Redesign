import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { scaleIn, hoverScale } from "../anim/hoverAnimations";
import { nextButtonStyles } from "../styles/buttonStyles";

const NextStepButton = ({ nextStep }) => (
  <motion.div {...scaleIn} {...hoverScale}>
    <Button
      fullWidth
      variant="contained"
      size="large"
      endIcon={<ArrowForward />}
      sx={nextButtonStyles}
    >
      Continue to {nextStep}
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
      <Box component="span" sx={{ color: "#d9534f", fontWeight: "bold" }}>
        *
      </Box>{" "}
      Mandatory next step
    </Typography>
  </motion.div>
);

export default NextStepButton;
