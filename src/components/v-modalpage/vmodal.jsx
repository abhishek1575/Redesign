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
          width: "580px",
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
          left: "49%",
          width: "180px",
          height: "125px",
          padding: "20px",
          backgroundColor: "#f9d3b4",
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
          Validation Process Group (VAL)
        </Typography>
        <SysBox top="75px" left="30px" id="VAL.1" label=" Validation" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "61%",
          width: "180px",
          height: "250px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "5px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Management Process Group (MAN)
        </Typography>
        <SysBox top="55px" left="27px" id="MAN.3" label="Project Management" />
        <SysBox
          top="133px"
          left="27px"
          id="MAN.5"
          label="System Verification"
        />
        <SysBox
          top="210px"
          left="27px"
          id="MAN.5"
          label="System Verification"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "36%",
          left: "16%",
          width: "420px",
          height: "260px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Software Engineering Process Group (SWE)
        </Typography>
        <SysBox
          top="35px"
          left="10px"
          id="SWE.1"
          label="Software Requirements Analysis"
        />
        <SysBox
          top="115px"
          left="25px"
          id="SWE.2"
          label="Software Architecture Design"
        />
        <SysBox
          top="195px"
          left="55px"
          id="SWE.3"
          label="Software Details Design and Unit Construction"
        />
        <SysBox
          top="215px"
          left="230px"
          id="SWE.4"
          label="Software Unit Verification"
        />
        <SysBox
          top="115px"
          left="250px"
          id="SWE.5"
          label="Software Component Verification and Integration Verification"
        />
        <SysBox
          top="35px"
          left="280px"
          id="SWE.6"
          label="Software Verification"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "36%",
          left: "775px",
          width: "340px",
          height: "260px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Hardware Engineering Process Group (HWE)
        </Typography>
        <SysBox
          top="35px"
          left="10px"
          id="HWE.1"
          label="Hardware Requirements Analysis"
        />
        <SysBox top="115px" left="25px" id="HWE.2" label="Hardware Design" />

        <SysBox
          top="115px"
          left="195px"
          id="HWE.3"
          label="Varification against Hardware Design"
        />
        <SysBox
          top="35px"
          left="205px"
          id="HWE.4"
          label="Hardware Integration and Verification"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "36%",
          left: "61%",
          width: "180px",
          height: "110px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Process Improvement Process Group (PIM)
        </Typography>
        <SysBox top="65px" left="27px" id="PIM.3" label="Process Improvement" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "52%",
          left: "61%",
          width: "180px",
          height: "110px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Reuse Process Group (REU)
        </Typography>
        <SysBox
          top="55px"
          left="27px"
          id="REU.2"
          label="Management of Products for Reuse"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "68%",
          left: "61%",
          width: "180px",
          height: "110px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Supply Process Group (SPL)
        </Typography>
        <SysBox top="55px" left="27px" id="SPL.2" label="Product Relese" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "68%",
          left: "965px",
          width: "150px",
          height: "110px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Acquisition Process Group (ACQ)
        </Typography>
        <SysBox top="60px" left="10px" id="ACQ.4" label="Supply Monitoring" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "68%",
          left: "16%",
          width: "610px",
          height: "110px",
          padding: "20px",
          backgroundColor: "#C1CEE0",
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
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%", // optional if you want full width
          }}
        >
          Machine Learning Process Group (MLE)
        </Typography>
        <SysBox
          top="55px"
          left="10px"
          id="MLE.1"
          label="Machine Learning Requirement Analysis"
        />
        <SysBox
          top="55px"
          left="180px"
          id="MLE.2"
          label="Machine Learning Architecture"
        />
        <SysBox
          top="55px"
          left="350px"
          id="MLE.3"
          label="Machine Learning Training"
        />
        <SysBox
          top="55px"
          left="520px"
          id="MLE.4"
          label="Machine Learning Model Testing"
        />
      </Box>
    </div>
  );
};

export default AutomotiveSpice;
