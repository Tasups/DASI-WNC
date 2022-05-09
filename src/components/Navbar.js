import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return(
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo-wrapper">
          <FontAwesomeIcon className="navbar-logo" icon={faFan} />
          <h1>DASI</h1>
        </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-links"><h3>HOME</h3></Link>
        </li>
        <li>
          <Link to="/about" className="navbar-links"><h3>ABOUT</h3></Link>
        </li>
        <li>
          <Link to="events&venues" className="navbar-links"><h3>EVENTS & VENUES</h3></Link>
        </li>
        <li>
         <Link to="getinvolved" className="navbar-links"><h3>GET INVOLVED</h3></Link>
        </li>
      </ul>
    </div>
    </div>
    
    )
}

export default Navbar