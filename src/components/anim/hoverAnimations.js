import { motion } from "framer-motion";

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
};

export const hoverTranslateX = {
  whileHover: { x: 5 },
  transition: { type: "spring", stiffness: 300 },
};

export const hoverColorChange = (color) => ({
  whileHover: { backgroundColor: color },
  transition: { duration: 0.3 },
});

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};
