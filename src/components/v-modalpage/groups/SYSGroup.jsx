import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";
import { useNavigate } from "react-router-dom";

const SYSGroup = ({ SysPaper, isLaptop, enabledProcessAreas }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
      navigate(`/aspice/${id}`);
  };
  return (
  <Box
    sx={{
      backgroundColor: "#f9d3b4",
      borderRadius: "5px",
      p: 1,
      width: isLaptop ? "450px" : "580px",
      height: "250px",
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
      System Engineering Process Group (SYS)
    </Typography>

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [25, 18], laptop: [25, 15] }}
      isLaptop={isLaptop}
      id="SYS.1"
      label="Requirement Elicitation"
      enabled={enabledProcessAreas.includes("SYS.1")}
      onClick={() => handleClick("SYS.1")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [53, 30], laptop: [53, 20] }}
      isLaptop={isLaptop}
      id="SYS.2"
      label="System Requirement Analysis"
      enabled={enabledProcessAreas.includes("SYS.2")}
      onClick={() => handleClick("SYS.2")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [81, 43], laptop: [80, 35] }}
      isLaptop={isLaptop}
      id="SYS.3"
      label="System Architecture Design"
      enabled={enabledProcessAreas.includes("SYS.3")}
      onClick={() => handleClick("SYS.3")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [81, 70], laptop: [80, 67] }}
      isLaptop={isLaptop}
      id="SYS.4"
      label="System Integration and Integration Verification"
      enabled={enabledProcessAreas.includes("SYS.4")}
      onClick={() => handleClick("SYS.4")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [53, 85], laptop: [50, 78] }}
      isLaptop={isLaptop}
      id="SYS.5"
      label="System Verification"
      enabled={enabledProcessAreas.includes("SYS.5")}
      onClick={() => handleClick("SYS.5")}
    />
  </Box>
);
}
  

export default SYSGroup;

// import { Typography, Box } from "@mui/material";
// import PositionedItem from "../PositionedItem";

// const SYSGroup = ({ SysPaper, isLaptop, enabledProcessAreas }) => (
//   <Box
//     sx={{
//       backgroundColor: "#f9d3b4",
//       borderRadius: "5px",
//       p: 1,
//       width: isLaptop ? "450px" : "580px",
//       height: "250px",
//       position: "relative",
//       flexShrink: 0,
//     }}
//   >
//     <Typography
//       variant="subtitle2"
//       fontWeight="bold"
//       textAlign="center"
//       sx={{ mb: 1 }}
//     >
//       System Engineering Process Group (SYS)
//     </Typography>

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [25, 18], laptop: [25, 15] }}
//       isLaptop={isLaptop}
//       id="SYS.1"
//       label="Requirement Elicitation"
//     />

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [53, 30], laptop: [53, 20] }}
//       isLaptop={isLaptop}
//       id="SYS.2"
//       label="System Requirement Analysis"
//     />

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [81, 43], laptop: [80, 35] }}
//       isLaptop={isLaptop}
//       id="SYS.3"
//       label="System Architecture Design"
//     />

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [81, 70], laptop: [80, 67] }}
//       isLaptop={isLaptop}
//       id="SYS.4"
//       label="System Integration and Integration Verification"
//     />

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [53, 85], laptop: [50, 78] }}
//       isLaptop={isLaptop}
//       id="SYS.5"
//       label="System Verification"
//     />
//   </Box>
// );

// export default SYSGroup;
