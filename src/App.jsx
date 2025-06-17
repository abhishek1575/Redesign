import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Index from "./components/v-modalpage";
import ASPICEProcessPage from "./components/process-areas/ASPICEProcessPage";
import processes from "./data/processes.jsx"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/aspice" element={<Index />} />
      <Route path="/aspice/:id" element={<ASPICEProcessPage />} />
    </Routes>
  );
}

export default App;
