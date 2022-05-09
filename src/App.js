import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import About from './pages/About'
import EventsAndVenues from './pages/EventsAndVenues'
import GetInvolved from './pages/GetInvolved'
import Home from './pages/Home'
import Footer from './components/Footer.js'
import './App.css';

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
            <Route path="/" element={<Home />} />
          </Routes>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;