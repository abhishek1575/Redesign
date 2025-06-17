import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const SPLGroup = ({ SysPaper, isLaptop, enabledProcessAreas }) => (
  <Box
    sx={{
      backgroundColor: "#D9EAD3",
      borderRadius: "5px",
      p: 1,
      width: "160px",
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
      Supply Process Group (SPL)
    </Typography>

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [65, 50], laptop: [65, 50] }}
      isLaptop={isLaptop}
      id="SPL.2"
      label="Product Release"
      enabled={enabledProcessAreas.includes("SPL.2")}
    />
  </Box>
);

export default SPLGroup;
