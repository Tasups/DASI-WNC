import React from 'react';

import { Link } from 'react-router-dom'


const NavLinks = () => {
  return(
    <ul className="sidebar-navlink-list">
      <li>
        <Link to="/" className="sidebar-navlink">
          <h3>HOME</h3>
        </Link>
      </li>
      <li>
        <Link to="/about" className="sidebar-navlink">
          <h3>ABOUT</h3>
        </Link>
      </li>
      <li>
        <Link to="events&venues" className="sidebar-navlink">
          <h3>EVENTS & VENUES</h3>
        </Link>
      </li>
      <li>
       <Link to="getinvolved" className="sidebar-navlink">
          <h3>GET INVOLVED</h3>
       </Link>
      </li>
    </ul>
    )
}

export default NavLinks;