import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import About from './pages/About'
import EventsAndVenues from './pages/EventsAndVenues'
import GetInvolved from './pages/GetInvolved'
import Home from './pages/Home'
import ACT from './pages/ACT'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="route-container">
          <div className="pages-container"> 
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/events&venues" element={<EventsAndVenues />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/act" element={<ACT />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;