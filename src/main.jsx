import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/dashboard/dashboard.jsx'
import AutomotiveSpice from './components/v-modalpage/vmodal.jsx'
import VModal from './components/v-modalpage/vmodal2.jsx'
import VModal3 from './components/v-modalpage/VModal3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Dashboard /> */}
    <AutomotiveSpice/>

    {/* <VModal/> */}
   {/* <VModal3/> */}
  </StrictMode>,
)
  