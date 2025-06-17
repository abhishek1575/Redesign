import React from "react";
import { Box, Grid, Typography, Paper, Avatar } from "@mui/material";
import { Group } from "@mui/icons-material";

const TeamRoles = ({ roles, gradient }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        height: "100%",
        background:
          gradient || "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
        width: "100%", // Ensure full width
        mb: 3, // Add margin bottom for spacing
      }}
    >
      <Box
        sx={{
          bgcolor: "#8ec5fc",
          py: 1.5,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="700" color="white">
          <Group sx={{ verticalAlign: "middle", mr: 1 }} />
          Team Roles
        </Typography>
      </Box>
      <Box p={2}>
        <Grid container spacing={1.5}>
          {roles.map((role) => (
            <Grid item xs={12} sm={6} md={4} key={role.id} sx={{ mb: 2 }}>
              {" "}
              {/* Responsive columns */}
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 1.5,
                  height: "100%",
                  borderLeft: `4px solid ${role.color}`,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box display="flex" alignItems="center">
                  <Avatar
                    sx={{
                      bgcolor: role.color,
                      width: 30,
                      height: 30,
                      mr: 1.5,
                    }}
                  >
                    <Group sx={{ fontSize: 16 }} />
                  </Avatar>
                  <Typography variant="body2" fontWeight="600">
                    {role.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default TeamRoles;
