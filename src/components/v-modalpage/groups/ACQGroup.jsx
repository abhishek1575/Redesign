import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";
import { useNavigate } from "react-router-dom";

const ACQGroup = ({ StyledPaper, isLaptop, enabledProcessAreas }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
      navigate(`/aspice/${id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#D9EAD3",
        borderRadius: "5px",
        p: 1,
        width: "140px",
        height: "110px",
        flexShrink: 0,
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 1 }}
      >
        Acquisition Process Group (ACQ)
      </Typography>
      <PositionedItem
        style={StyledPaper}
        positions={{ desktop: [94, 78.5], laptop: [95, 72] }}
        isLaptop={isLaptop}
        id="ACQ.4"
        label="Supplier Monitoring"
        enabled={enabledProcessAreas.includes("ACQ.4")}
        onClick={() => handleClick("ACQ.4")}
      />
    </Box>
  );
}
  

export default ACQGroup;
