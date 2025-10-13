import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";
import { useNavigate } from "react-router-dom";

const MLEGroup = ({ SysPaper, isLaptop, enabledProcessAreas }) => {
  const navigate = useNavigate();
  const handleClick = (id) =>{
    navigate(`/aspice/${id}`);
  }
  return (
<Box
    sx={{
      backgroundColor: "#D9EAD3",
      borderRadius: "5px",
      p: 1,
      width: isLaptop ? "480px" : "630px",
      height: "110px",
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
      Machine Learning Engineering Process Group (MLE)
    </Typography>

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 14], laptop: [50, 12] }}
      isLaptop={isLaptop}
      id="MLE.1"
      label="Machine Learning Requirement Analysis"
      enabled={enabledProcessAreas.includes("MLE.1")}
      onClick = {() => handleClick("MLE.1")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 38], laptop: [50, 37] }}
      isLaptop={isLaptop}
      id="MLE.2"
      label="Machine Learning Architecture"
      enabled={enabledProcessAreas.includes("MLE.2")}
      onClick = {() => handleClick("MLE.2")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 62], laptop: [50, 62] }}
      isLaptop={isLaptop}
      id="MLE.3"
      label="Machine Learning Training"
      enabled={enabledProcessAreas.includes("MLE.3")}
      onClick = {() => handleClick("MLE.3")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 86], laptop: [50, 87] }}
      isLaptop={isLaptop}
      id="MLE.4"
      label="Machine Learning Model Testing"
      enabled={enabledProcessAreas.includes("MLE.4")}
      onClick = {() => handleClick("MLE.4")}
    />
  </Box>
);

}
  
export default MLEGroup;

// import { Typography, Box } from "@mui/material";
// import PositionedItem from "../PositionedItem";

// const MLEGroup = ({ SysPaper, isLaptop, enabled }) => (
//   <Box
//     sx={{
//       backgroundColor: "#D9EAD3",
//       borderRadius: "5px",
//       p: 1,
//       width: isLaptop ? "480px" : "630px",
//       height: "110px",
//       position: "relative",
//       flexShrink: 0,
//       opacity: enabled ? 1 : 0.5,
//       pointerEvents: enabled ? "auto" : "none",
//     }}
//   >
//     <Typography
//       variant="subtitle2"
//       fontWeight="bold"
//       textAlign="center"
//       sx={{ mb: 1 }}
//     >
//       Machine Learning Engineering Process Group (MLE)
//     </Typography>

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [65, 14], laptop: [50, 12] }}
//       isLaptop={isLaptop}
//       id="MLE.1"
//       label="Machine Learning Requirement Analysis"
//     />

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [65, 38], laptop: [50, 37] }}
//       isLaptop={isLaptop}
//       id="MLE.2"
//       label="Machine Learning Architecture"
//     />

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [65, 62], laptop: [50, 62] }}
//       isLaptop={isLaptop}
//       id="MLE.3"
//       label="Machine Learning Training"
//     />

//     <PositionedItem
//       style={SysPaper}
//       positions={{ desktop: [65, 86], laptop: [50, 87] }}
//       isLaptop={isLaptop}
//       id="MLE.4"
//       label="Machine Learning Model Testing"
//     />
//   </Box>
// );

// export default MLEGroup;
