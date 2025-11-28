import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Avatar,
  styled,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 320,
  minHeight: 180,
  borderTop: `5px solid ${theme.palette.primary.main}`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const NumberBadge = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 45,
  height: 45,
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const ArrowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.light,
  animation: "pulse 1.5s ease-in-out infinite",
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: 0.6,
    },
    "50%": {
      opacity: 1,
    },
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const RequirementsFlow = () => {
  const requirements = [
    {
      id: 1,
      title: "Requirements Elicitation",
      description:
        "Gather and analyze system requirements, customer needs, and constraints",
    },
    {
      id: 2,
      title: "Requirements Specification",
      description:
        "Document functional, non-functional, and interface requirements",
    },
    {
      id: 3,
      title: "Requirements Analysis",
      description:
        "Analyze for completeness, consistency, feasibility, and testability",
    },
    {
      id: 4,
      title: "Traceability Establishment",
      description:
        "Create bidirectional traceability links to system requirements",
    },
    {
      id: 5,
      title: "Requirements Review & Approval",
      description:
        "Conduct formal review with stakeholders and obtain approval",
    },
    {
      id: 6,
      title: "Requirements Management",
      description:
        "Monitor, track changes, and maintain requirements throughout lifecycle",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{
            fontWeight: 700,
            color: "#1e293b",
            mb: 6,
          }}
        >
          Requirements Engineering Workflow
        </Typography>

        {/* First Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: 4,
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          {requirements.slice(0, 3).map((req, index) => (
            <React.Fragment key={req.id}>
              <StyledCard elevation={3}>
                <CardContent>
                  <NumberBadge>{req.id}</NumberBadge>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {req.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                    }}
                  >
                    {req.description}
                  </Typography>
                </CardContent>
              </StyledCard>
              {index < 2 && (
                <ArrowBox>
                  <ArrowForwardIcon sx={{ fontSize: 40 }} />
                </ArrowBox>
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* Vertical Arrow */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
            animation: "pulseDown 1.5s ease-in-out infinite",
            "@keyframes pulseDown": {
              "0%, 100%": {
                opacity: 0.6,
                transform: "translateY(0)",
              },
              "50%": {
                opacity: 1,
                transform: "translateY(5px)",
              },
            },
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: 50, color: "primary.light" }} />
        </Box>

        {/* Second Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          {requirements.slice(3, 6).map((req, index) => (
            <React.Fragment key={req.id}>
              <StyledCard elevation={3}>
                <CardContent>
                  <NumberBadge>{req.id}</NumberBadge>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {req.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                    }}
                  >
                    {req.description}
                  </Typography>
                </CardContent>
              </StyledCard>
              {index < 2 && (
                <ArrowBox>
                  <ArrowForwardIcon sx={{ fontSize: 40 }} />
                </ArrowBox>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default RequirementsFlow;
