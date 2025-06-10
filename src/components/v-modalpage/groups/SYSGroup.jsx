import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const SYSGroup = ({ SysPaper, isLaptop }) => (
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
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [53, 30], laptop: [50, 20] }}
      isLaptop={isLaptop}
      id="SYS.2"
      label="System Requirement Analysis"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [81, 43], laptop: [75, 35] }}
      isLaptop={isLaptop}
      id="SYS.3"
      label="System Architecture Design"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [81, 70], laptop: [75, 67] }}
      isLaptop={isLaptop}
      id="SYS.4"
      label="System Integration and Verification"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [53, 85], laptop: [50, 78] }}
      isLaptop={isLaptop}
      id="SYS.5"
      label="System Verification"
    />
  </Box>
);

export default SYSGroup;
