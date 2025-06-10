import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const SPLGroup = ({ SysPaper, isLaptop }) => (
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
      positions={{ desktop: [65, 50], laptop: [60, 90] }}
      isLaptop={isLaptop}
      id="SPL.2"
      label="Product Release"
    />
  </Box>
);

export default SPLGroup;
