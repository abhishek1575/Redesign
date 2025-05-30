import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  borderRadius: "8px",

  width: "150px",
  minHeight: "60px",
  maxWidth: "150px",
  whiteSpace: "normal",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  wordBreak: "break-word",
}));

const Item = ({ id, label }) => (
  <StyledPaper elevation={2}>
    <b>{id}</b>
    <br />
    {label}
  </StyledPaper>
);

const SysBox = ({ id, label, style }) => (
  <Box
    sx={{
      position: "absolute",
      ...style,
      transform: "translate(-50%, -50%)",
    }}
  >
    <StyledPaper elevation={2}>
      <b>{id}</b>
      <br />
      {label}
    </StyledPaper>
  </Box>
);

const VModal = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: 4,
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          justifyContent: "center",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          gap: 1,
          flexWrap: "nowrap",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#D7EAD8",
            padding: 2,
            borderRadius: "5px",
            width: {
              xs: "70%",
              md: "190px",
            },
            flexShrink: 0,
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            mb={1}
            textAlign="center"
          >
            Supporting Process Group (SUP)
          </Typography>

          <Grid container spacing={1} direction="column" alignItems="center">
            {[
              { id: "SUP 1", label: "Quality Assurance" },
              { id: "SUP 2", label: "Configuration Management" },
              { id: "SUP 3", label: "Problem Resolution Management" },
              { id: "SUP 4", label: "Change Request Management" },
              { id: "SUP 5", label: "Machine Learning Data Management" },
            ].map((item, i) => (
              <Grid item key={i}>
                <Item id={item.id} label={item.label} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f9d3b4",
            borderRadius: "5px",
            padding: 2,
            width: {
              xs: "100%",
              md: "550px",
            },
            height: {
              xs: "auto",
              md: "250px",
            },
            position: "relative",
            overflowX: "auto",
            flexShrink: 0,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#f9d3b4",
              px: 1,
            }}
          >
            System Engineering Process Group (SYS)
          </Typography>

          <SysBox
            id="SYS.1"
            label="Requirement Elicitation"
            style={{ top: "26%", left: "16%" }}
          />
          <SysBox
            id="SYS.2"
            label="System Requirement Analysis"
            style={{ top: "55%", left: "25%" }}
          />
          <SysBox
            id="SYS.3"
            label="System Architecture Design"
            style={{ top: "83%", left: "40%" }}
          />
          <SysBox
            id="SYS.4"
            label="System Integration and Integration Verification"
            style={{ top: "83%", left: "70%" }}
          />
          <SysBox
            id="SYS.5"
            label="System Verification"
            style={{ top: "55%", left: "83%" }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#f9d3b4",
            padding: 2,
            borderRadius: "5px",
            width: {
              xs: "70%",
              md: "150px",
            },
            height: {
              xs: "auto",
              md: "125px",
            },
            position: "relative",
            // overflowX: "auto",
            flexShrink: 0,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            Validation Process Group (VAL)
          </Typography>
          <SysBox
            id="SYS.5"
            label="System Verification"
            style={{ top: "68%", left: "50%" }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#C1CEE0",
            padding: 2,
            borderRadius: "5px",
            width: {
              xs: "70%",
              md: "190px",
            },
            height: {
              xs: "auto",
              md: "250px",
            },
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "10px",
              position: "absolute",
              top: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            Management Process Group (MAN)
          </Typography>
          <SysBox
            id="MAN.3"
            label="Project Management"
            style={{ top: "29%", left: "50%" }}
          />
          <SysBox
            id="MAN.5"
            label="Project Management"
            style={{ top: "57%", left: "50%" }}
          />
          <SysBox
            id="MAN.6"
            label="Project Management"
            style={{ top: "85%", left: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VModal;
