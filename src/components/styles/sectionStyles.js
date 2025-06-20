export const containerStyles = {
  py: 4,
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7f1 100%)",
  backgroundAttachment: "fixed",
};

export const sectionHeaderStyles = (color1, color2) => ({
  p: 2,
  background: `linear-gradient(90deg, ${color1}, ${color2})`,
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
});

export const sectionContentStyles = {
  p: 3,
  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
};

export const paperStyles = (borderColor) => ({
  borderRadius: 3,
  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
  border: `1px solid ${borderColor}`,
});
