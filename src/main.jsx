import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this
import App from "./App.jsx";
import ASPICEProcessPage from "./components/process-areas/ASPICEProcessPage.jsx";
import processes from "./components/data/processes.jsx";
import ProcessAreaPage from "./components/ProcessAreaPage/ProcessAreaPage.jsx";

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
       {/* <ProcessAreaPage /> */}
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
