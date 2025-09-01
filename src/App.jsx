import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Index from "./components/v-modalpage";
import ProcessAreaPage from "./components/ProcessAreaPage/ProcessAreaPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/aspice" element={<Index />} />
      <Route path="/aspice/:id" element={<ProcessAreaPage />} />
      
    </Routes>
  );
}

export default App;
