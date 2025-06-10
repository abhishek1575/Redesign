import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const MLEGroup = ({ SysPaper, isLaptop }) => (
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
      label="ML Data Management"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 38], laptop: [50, 37] }}
      isLaptop={isLaptop}
      id="MLE.2"
      label="ML Model Development"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 62], laptop: [50, 62] }}
      isLaptop={isLaptop}
      id="MLE.3"
      label="ML Model Verification"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 86], laptop: [50, 87] }}
      isLaptop={isLaptop}
      id="MLE.4"
      label="ML Deployment"
    />
  </Box>
);

export default MLEGroup;
