import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import DropDown from "./dropdown";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

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
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
          padding: 5,
          boxSizing: "border-box",
        }}
      >
        {/* Cards */}
        <Card sx={{ maxWidth: 345, maxHeight: 345 }} onClick={handleCardClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="static\images\dashboard-Image\ASPICE4.0.jpg"
              alt="qms image"
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

        <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="static/images/dashboard-Image/ISO-2622.jpg"
              alt="ISO-26262-image"
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

        <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="static\images\dashboard-Image\CYBERSECURITY.jpg"
              alt="cybersecurity-image"
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
          marginTop: "100px",
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

