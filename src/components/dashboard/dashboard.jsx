import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import DropDown from "./dropdown";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const getCardWidth = () => {
    if (isSmallScreen) return "100%";
    if (isMediumScreen) return "45%";
    return 345;
  };

  const getBoxGap = () => {
    if (isSmallScreen) return 2;
    if (isMediumScreen) return 3;
    return 5;
  };

  const handleCardClick = () => {
    navigate("/aspice");
  };

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: getBoxGap(),
          padding: isSmallScreen ? 2 : 5,
          boxSizing: "border-box",
        }}
      >
        {/* Cards */}
        <Card
          sx={{
            width: getCardWidth(),
            maxWidth: 345,
            maxHeight: 345,
            margin: isSmallScreen ? "0 auto" : undefined,
          }}
          onClick={handleCardClick}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="static/images/dashboard-Image/ASPICE4.0.jpg"
              alt="qms image"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ASPICE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Automotive Software Process
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            width: getCardWidth(),
            maxWidth: 345,
            maxHeight: 345,
            margin: isSmallScreen ? "0 auto" : undefined,
          }}
          onClick={() => navigate("/iso_mainpage")}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="static/images/dashboard-Image/ISO-2622.jpg"
              alt="ISO-26262-image"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ISO- 26262
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Functional Safety
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            width: getCardWidth(),
            maxWidth: 345,
            maxHeight: 345,
            margin: isSmallScreen ? "0 auto" : undefined,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="static/images/dashboard-Image/CYBERSECURITY.jpg"
              alt="cybersecurity-image"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cyber Security
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Secure Software from cyber attacks
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <div
        style={{
          marginTop: isSmallScreen ? "40px" : "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DropDown />
      </div>
    </div>
  );
}

export default Dashboard;
