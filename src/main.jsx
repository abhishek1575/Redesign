import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this
import App from "./App.jsx";
import ProcessAreaPage from "./components/ProcessAreaPage/ProcessAreaPage.jsx";

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        {/* <ProcessAreaPage processId="SWE.1" /> */}
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
