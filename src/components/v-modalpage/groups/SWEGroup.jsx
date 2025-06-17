import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";
import { useNavigate } from "react-router-dom";

const SWEGroup = ({ SysPaper, isLaptop, enabledProcessAreas }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/aspice/${id.toLowerCase()}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9d3b4",
        borderRadius: "5px",
        p: 1,
        width: isLaptop ? "350px" : "410px",
        height: "275px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 1 }}
      >
        Software Engineering Process Group (SWE)
      </Typography>

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [26, 20], laptop: [26, 22] }}
        isLaptop={isLaptop}
        id="SWE.1"
        label="Software Requirements Analysis"
        onClick={() => handleClick("SWE1")}
        enabled={enabledProcessAreas.includes("SWE.1")}
      />

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [52, 25], laptop: [54, 25] }}
        isLaptop={isLaptop}
        id="SWE.2"
        label="Software Architectural Design"
        onClick={() => handleClick("SWE2")}
        enabled={enabledProcessAreas.includes("SWE.2")}
      />

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [82, 30], laptop: [82, 30] }}
        isLaptop={isLaptop}
        id="SWE.3"
        label="Software Details Design and Unit Construction"
        onClick={() => handleClick("SWE3")}
        enabled={enabledProcessAreas.includes("SWE.3")}
      />

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [82, 69], laptop: [85, 70] }}
        isLaptop={isLaptop}
        id="SWE.4"
        label="Software Unit Verification"
        onClick={() => handleClick("SWE4")}
        enabled={enabledProcessAreas.includes("SWE.4")}
      />

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [52, 75], laptop: [52, 75] }}
        isLaptop={isLaptop}
        id="SWE.5"
        label="Software Component Verification and Integration Verification"
        onClick={() => handleClick("SWE5")}
        enabled={enabledProcessAreas.includes("SWE.5")}
      />

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [26, 80], laptop: [22, 80] }}
        isLaptop={isLaptop}
        id="SWE.6"
        label="Software Verification"
        onClick={() => handleClick("SWE6")}
        enabled={enabledProcessAreas.includes("SWE.6")}
      />
    </Box>
  );
};

export default SWEGroup;

// import { Typography, Box } from "@mui/material";
// import PositionedItem from "../PositionedItem";
// import { useNavigate } from "react-router-dom";

// const SWEGroup = ({ SysPaper, isLaptop, enabled }) => {
//   const navigate = useNavigate();

//   const handleClick = (id) => {
//     navigate(`/aspice/${id.toLowerCase()}`);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#f9d3b4",
//         borderRadius: "5px",
//         p: 1,
//         width: isLaptop ? "350px" : "410px",
//         height: "275px",
//         position: "relative",
//         flexShrink: 0,
//         opacity: enabled ? 1 : 0.5,
//         pointerEvents: enabled ? "auto" : "none",
//       }}
//     >
//       <Typography
//         variant="subtitle2"
//         fontWeight="bold"
//         textAlign="center"
//         sx={{ mb: 1 }}
//       >
//         Software Engineering Process Group (SWE)
//       </Typography>

//       <PositionedItem
//         style={SysPaper}
//         positions={{ desktop: [26, 20], laptop: [26, 22] }}
//         isLaptop={isLaptop}
//         id="SWE.1"
//         label="Software Requirements Analysis"
//         onClick={() => handleClick("SWE1")}
//       />

//       <PositionedItem
//         style={SysPaper}
//         positions={{ desktop: [52, 25], laptop: [54, 25] }}
//         isLaptop={isLaptop}
//         id="SWE.2"
//         label="Software Architectural Design"
//         onClick={() => handleClick("SWE2")}
//       />

//       <PositionedItem
//         style={SysPaper}
//         positions={{ desktop: [82, 30], laptop: [82, 30] }}
//         isLaptop={isLaptop}
//         id="SWE.3"
//         label="Software Details Design and Unit Construction"
//         onClick={() => handleClick("SWE3")}
//       />

//       <PositionedItem
//         style={SysPaper}
//         positions={{ desktop: [82, 69], laptop: [85, 70] }}
//         isLaptop={isLaptop}
//         id="SWE.4"
//         label="Software Unit Verification"
//         onClick={() => handleClick("SWE4")}
//       />

//       <PositionedItem
//         style={SysPaper}
//         positions={{ desktop: [52, 75], laptop: [52, 75] }}
//         isLaptop={isLaptop}
//         id="SWE.5"
//         label="Software Component Verification and Integration Verification"
//         onClick={() => handleClick("SWE5")}
//       />

//       <PositionedItem
//         style={SysPaper}
//         positions={{ desktop: [26, 80], laptop: [22, 80] }}
//         isLaptop={isLaptop}
//         id="SWE.6"
//         label="Software Verification"
//         onClick={() => handleClick("SWE6")}
//       />
//     </Box>
//   );
// };

// export default SWEGroup;
