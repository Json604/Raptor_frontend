import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
// import Results from './pages/Results'
import SignUp from './pages/sign-up/signup'
import BgBeam from './components/BgBeam'

function App() {
  return (
    <Router>
      <BgBeam/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/results" element={<Results />} /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App