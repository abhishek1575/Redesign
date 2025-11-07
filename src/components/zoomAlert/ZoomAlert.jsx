import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const ZoomAlert = () => {
  const [zoomWarning, setZoomWarning] = useState(false);

  useEffect(() => {
    const checkZoom = () => {
      const zoom = Math.round((window.devicePixelRatio || 1) * 100);
      setZoomWarning(zoom !== 100);
    };

    window.addEventListener("resize", checkZoom);
    checkZoom(); // Initial check when page loads

    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  return (
    <Snackbar
      open={zoomWarning}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity="warning"
        variant="filled"
        sx={{ width: "100%", backgroundColor: "#f57c00" }}
      >
        ⚠️ Your browser zoom is not 100%. Please reset it for the best viewing
        experience.
      </Alert>
    </Snackbar>
  );
};

export default ZoomAlert;
