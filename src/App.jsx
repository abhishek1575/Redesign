import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Index from "./components/v-modalpage";
import ProcessAreaPage from "./components/ProcessAreaPage/ProcessAreaPage";
import ZoomAlert from "./components/zoomAlert/ZoomAlert"; // ✅ Import the new alert component
import ISO26262Portal from "./components/iso26262/MainPage";

function App() {
  return (
    <>
      {/* ✅ Show the alert on every page */}
      <ZoomAlert />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aspice" element={<Index />} />
        <Route path="/aspice/:id" element={<ProcessAreaPage />} />
        <Route path="/iso_mainpage" element={<ISO26262Portal />} />
      </Routes>
    </>
  );
}

export default App;


