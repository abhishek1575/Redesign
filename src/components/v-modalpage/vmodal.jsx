import React from "react";
import { Box, Paper, Typography, styled } from "@mui/material";

// Custom styled Paper like 'Item'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  borderRadius: "5px",

  width: "150px", // fixed width
  minHeight: "60px", // default height
  maxWidth: "150px", // optional for safety
  wordWrap: "break-word",
  whiteSpace: "normal", // allows wrapping

  overflowWrap: "break-word", // extra safety for long words

  ...theme.applyStyles?.("dark", {
    backgroundColor: "#1A2027",
  }),
}));

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text.secondary,
//   borderRadius: "10px",
//   minWidth: "120px",
//   maxWidth: "150px",
//   wordWrap: "break-word",
//   whiteSpace: "normal",
//   ...theme.applyStyles?.("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

// Positionable Item Box
const SysBox = ({ top, left, id, label }) => (
  <Box sx={{ position: "absolute", top, left }}>
    <Item elevation={1}>
      <b>{id}</b>
      <br />
      {label}
    </Item>
  </Box>
);

const AutomotiveSpice = () => {
  return (
    <div sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "200px",
          height: "500px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          padding: 1,
          boxSizing: "border-box",
          backgroundColor: "#D7EAD8",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Supporting Process Group (SUP)
        </Typography>

        <SysBox
          top="70px"
          left="20px"
          id="SUP.1"
          label="Requirement Elicitation"
        />
        <SysBox
          top="155px"
          left="20px"
          id="SUP.2"
          label="System Requirement Analysis"
        />
        <SysBox
          top="240px"
          left="20px"
          id="SUP.3"
          label="System Architecture Design"
        />
        <SysBox
          top="325px"
          left="20px"
          id="SUP.4"
          label="System Integration and Verification"
        />
        <SysBox
          top="410px"
          left="20px"
          id="SUP.5"
          label="System Verification"
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "16%",
          width: "590px",
          height: "250px",
          backgroundColor: "#f9d3b4",
          padding: "20px",
          padding: "20px",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Supporting Process Group (SUP)
        </Typography>
        {/* SYS Items positioned absolutely inside this box */}
        <SysBox
          top="45px"
          left="30px"
          id="SYS.1"
          label="Requirement Elicitation"
        />
        <SysBox
          top="125px"
          left="90px"
          id="SYS.2"
          label="System Requirement Analysis"
        />
        <SysBox
          top="205px"
          left="150px"
          id="SYS.3"
          label="System Architecture Design"
        />
        <SysBox
          top="205px"
          left="360px"
          id="SYS.4"
          label="System Integration and Verification"
        />
        <SysBox
          top="125px"
          left="425px"
          id="SUP.5"
          label="System Verification"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "50%",
          width: "180px",
          height: "125px",
          padding: "20px",
          backgroundColor: "#f9d3b4",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="Subtitle1"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Validation Process Group (VAL)
        </Typography>
        <SysBox top="70px" left="50px" id="VAL.1" label=" Validation"></SysBox>
      </Box>
    </div>
  );
};

export default AutomotiveSpice;
