export const nextButtonStyles = {
  py: 2,
  borderRadius: 3,
  background: "linear-gradient(45deg, #9d73b4, #b491c9)",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.1rem",
  boxShadow: "0 6px 15px rgba(157, 115, 180, 0.3)",
  transition: "all 0.3s",
  "&:hover": {
    boxShadow: "0 8px 20px rgba(157, 115, 180, 0.4)",
    background: "linear-gradient(45deg, #b491c9, #9d73b4)",
  },
};

export const downloadButtonStyles = (color) => ({
  borderColor: color,
  color: color,
  "&:hover": {
    backgroundColor: `${color}10`,
    borderColor: color,
  },
});
