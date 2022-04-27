import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <li><h3>HOME</h3></li>
        <li><h3>ABOUT</h3></li>
        <li><h3>EVENTS & VENUES</h3></li>
        <li><h3>GET INVOLVED</h3></li>
      </ul>
    </div>
    </div>
    
    )
}

export default Navbar