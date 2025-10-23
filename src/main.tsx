import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/main/App.tsx'
import Navbar from './components/Navbar.tsx'
import BgBeam from './components/BgBeam.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BgBeam />
    <Navbar />
    <App />
  </StrictMode>,
)
