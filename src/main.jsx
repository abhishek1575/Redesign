import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from './App.jsx'
import Dashboard from './components/dashboard/dashboard.jsx'
import AutomotiveSpice from './components/v-modalpage/vmodal.jsx'
import VModal from './components/v-modalpage/vmodal2.jsx'
import VModal3 from './components/v-modalpage/VModal3.jsx'
import FinalModal from './components/v-modalpage/FinalModal.jsx'
const theme = createTheme();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      {/* <AutomotiveSpice/> */}
      <FinalModal />
      {/* <VModal />   */}
      {/* <VModal3/> */}
    </ThemeProvider>
  </StrictMode>
);
  