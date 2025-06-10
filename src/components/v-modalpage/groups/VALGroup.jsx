import { Typography, Box } from "@mui/material";
import ProcessItem from "../ProcessItem";

const VALGroup = ({ StyledPaper }) => (
  <Box
    sx={{
      backgroundColor: "#f9d3b4",
      p: 2,
      borderRadius: "5px",
      width: "175px",
      height: "125px",
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
      Validation Process Group (VAL)
    </Typography>
    <Box
      sx={{
        position: "absolute",
        top: "65%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ProcessItem style={StyledPaper} id="VAL.1" label="Validation" />
    </Box>
  </Box>
);

export default VALGroup;
