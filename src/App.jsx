
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./components/dashboard/dashboard";
import VModal from "./components/v-modalpage/vmodal2";
// import AutomotiveSpice from "./components/v-modalpage/VModal";

function App() {
  

  return (
    <>
      {/* < Dashboard/> */}
      {/* <AutomotiveSpice/> */}
      <VModal />
    </>
  );
}

export default App
