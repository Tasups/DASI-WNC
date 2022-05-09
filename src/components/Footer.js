import React from 'react';

const Footer = () => {
  return(
    <div className="footer-wrapper">
      <div className="footer-container">
        <ul className="footer-list">
          <li>
            <h3>President - Jan Stanko 
              <a href="mailto:jankopluto@charter.net">jankopluto@charter.net</a>
            </h3>
          </li>
          <li>
            <h3>Webdeveloper - Jason Whisnant 
              <a href="mailto:tasups@gmail.com"> tasups@gmail.com</a>
            </h3>
          </li>
        </ul>
        <div className="footer-memorial">
          <h3>
          DASI is a nonprofit community organization founded by Bob Brummond in 2001.
          </h3>
        </div>
      </div>
    </div>
    )
}

export default Footer;