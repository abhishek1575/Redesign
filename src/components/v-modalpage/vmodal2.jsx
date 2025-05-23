import { Box, Grid, Paper, Stack, styled, Typography } from "@mui/material";

const VModal = () => {
    const Item = styled(Paper)(({ theme}) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark',{
            backgroundColor: '#1A2027',
        })
    }));

    const SysBox = ({ top, left, id, label }) => (
      <Box
        sx={{
          position: "absolute",
          top: top,
          left: left,
        }}
      >
        <Paper
          elevation={1}
          sx={{
            padding: "10px ",
            textAlign: "center",
            borderRadius: "10px",
            minWidth: "100px",
            backgroundColor: "#fff",
            fontSize: "14px",
          }}
        >
          <b>{id}</b>
          <br />
          {label}
        </Paper>
      </Box>
    );
    return (
      <div
        sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "200px",
            height: "500px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            padding: 1,
            boxSizing: "border-box",
            backgroundColor: "#D7EAD8",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <Grid size={{ xs: 6, md: 12 }}>
              <b>Supporting Process Group (SUP)</b>
            </Grid>
            <Grid size={{ xs: 6, md: 12 }}>
              <Item>
                <b>SUP 1</b> <br /> Quality Assurance
              </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 12 }}>
              <Item>
                <b>SUP 2</b> <br /> configueration Management
              </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 12 }}>
              <Item>
                <b>SUP 3</b> <br /> Problem Resolution Management
              </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 12 }}>
              <Item>
                <b>SUP 4</b> <br /> Change Request Management
              </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 12 }}>
              <Item>
                <b>SUP 5</b> <br /> Machine Learning Data Management
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "16%",
            width: "720px",
            height: "250px",
            backgroundColor: "#f9d3b4",
            padding: "20px",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            System Engineering Process Group (SYS)
          </Typography>

          <SysBox
            top="60px"
            left="30px"
            id="SYS.1"
            label="Requirement Elicitation"
          />
          <SysBox
            top="130px"
            left="90px"
            id="SYS.2"
            label="System Requirement Analysis"
          />
          <SysBox
            top="200px"
            left="150px"
            id="SYS.3"
            label="System Architecture Design"
          />
          <SysBox
            top="200px"
            left="360px"
            id="SYS.4"
            label="System Integration and Integration Verification"
          />
          <SysBox
            top="130px"
            left="600px"
            id="SYS.5"
            label="System Verification"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "56%",
            width: "180px",
            height: "125px",
            padding: "20px",
            backgroundColor: "#f9d3b4",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="Subtitle1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Validation Process Group (VAL)
          </Typography>
          <SysBox
            top="70px"
            left="50px"
            id="VAL.1"
            label=" Validation"
          ></SysBox>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "68%",
            width: "200px",
            height: "250px",
            padding: "20px",
            backgroundColor: "#C1CEE0",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="Subtitle1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Management Process Group (MAN)
          </Typography>
          <SysBox
            top="65px"
            left="38px"
            id="MAN.3"
            label="Project Management"
          ></SysBox>
          <SysBox
            top="135px"
            left="38px"
            id="MAN.5"
            label="Risk Management"
          ></SysBox>
          <SysBox
            top="203px"
            left="38px"
            id="MAN.6"
            label="Measurement"
          ></SysBox>
        </Box>
        <Box 
        sx={{
          position: "absolute",
          top: "36%",
          left: "16%",
          width: "450px",
          height: "250px",
          padding: "10px",
          backgroundColor: "#C1CEE0",
          overflow: "hidden",
        }}>
          <Typography
            variant="Subtitle1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Software Engineering Process Group (SWE)
          </Typography>
          <SysBox
            top="70px"
            left="20px"
            id="SWE.1"
            label="Software Requirement Analysis"
          ></SysBox>
        </Box>
      </div>
    );
}
export default VModal;

