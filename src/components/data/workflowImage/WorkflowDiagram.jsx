import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  minHeight: "auto",
  borderTop: `3px solid ${theme.palette.primary.main}`,
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
  },
}));

const NumberBadge = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 30,
  height: 30,
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

const ArrowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.light,
  flexShrink: 0,
}));

const WorkflowDiagram = ({ title, cards }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  if (!cards || cards.length === 0) {
    return null; // Or a fallback component
  }

  return (
    <Box sx={{ width: "100%", p: isSmallScreen ? 1 : 2 }}>
      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        component="h1"
        align="center"
        sx={{ fontWeight: 600, color: "#1e293b", mb: isSmallScreen ? 2 : 3 }}
      >
        {title || "Workflow"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        {cards.slice(0, 3).map((req, index) => (
          <React.Fragment key={req.id}>
            <StyledCard elevation={1}>
              <CardContent sx={{ p: 1.5 }}>
                <NumberBadge>{req.id}</NumberBadge>
                <Typography variant="subtitle2" component="h3" sx={{ fontWeight: 700, color: "#1e293b", mb: 0.5 }}>
                  {req.title}
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b" }}>
                  {req.description}
                </Typography>
              </CardContent>
            </StyledCard>
            {index < 2 && !isSmallScreen && (
              <ArrowBox>
                <ArrowForwardIcon sx={{ fontSize: 24 }} />
              </ArrowBox>
            )}
          </React.Fragment>
        ))}
      </Box>

      {cards.length > 3 && (
        <>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <ArrowDownwardIcon sx={{ fontSize: 30, color: "primary.light" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            {cards.slice(3, 6).map((req, index) => (
              <React.Fragment key={req.id}>
                <StyledCard elevation={1}>
                  <CardContent sx={{ p: 1.5 }}>
                    <NumberBadge>{req.id}</NumberBadge>
                    <Typography variant="subtitle2" component="h3" sx={{ fontWeight: 700, color: "#1e293b", mb: 0.5 }}>
                      {req.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#64748b" }}>
                      {req.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
                {index < cards.slice(3, 6).length - 1 && !isSmallScreen && (
                  <ArrowBox>
                    <ArrowForwardIcon sx={{ fontSize: 24 }} />
                  </ArrowBox>
                )}
              </React.Fragment>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default WorkflowDiagram;
