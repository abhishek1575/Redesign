import { Paper } from "@mui/material";
import { motion } from "framer-motion";


const ImageBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
          // minHeight: 250,
          boxShadow: "0 4px 12px rgba(149, 157, 165, 0.08)",
          border: "1px solid rgba(74, 111, 165, 0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          height: 160, // Ensure fixed height for the box
        }}
      >
        <img
          src="static/images/ASPICE-image/swe1.png"
          alt="ASPICE SWE.1"
          style={{
            width: "100%",
            height: "100%",
            // objectFit: "cover",
            // display: "block",
          }}
        />
      </Paper>
    </motion.div>
  );
};
export default ImageBox;
