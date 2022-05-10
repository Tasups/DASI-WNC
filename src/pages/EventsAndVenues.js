import React from 'react'

const EventsAndVenues = () => {
  return(
    <div className="events-and-venues card">
      <h2 className="about-headers">Events and Venues</h2>
        <h3>
          DASI has described at many theaters and venues in WNC. We are portable, so we can take our equipment and provide AD at any theater that requests our services. We have a standing agreement with Asheville Community Theater (ACT) to describe the second weekend of Mainstage performances. ACT generously offers a complimentary ticket to the driver for a visually impaired person attending a DASI described performance. If there is an event not listed below that you would like to have described, contact the theater and ask them to provide AD through DASI. 
        </h3>
        
      <h2 className="about-headers">Productions at Asheville Community Theater</h2>
        <h3>  
          <ul>
            <li>2018-2019 Season</li>
            <li>Avenue Q, October 12-14</li>
            <li>Snowbound, December 7-9</li>
            <li>Footloose, February 15-17</li>
            <li>Alice in Wonderland, April 12-14</li>
            <li>Hands on a Hardbody, June 14-16</li>
            <li>Rabbit Hole, August 16-18</li>
          </ul>
          <div className="act-shows">
            Friday and Saturday shows start at 7:30pm while Sunday matinee performances begin at 2:30pm.
            Tickets can be purchased through the ACT box office at 828-254-1320. 
            ACT will provide a complimentary ticket to the driver of anyone using DASI!
            Other described performances will be listed here once they are confirmed with the theater.
          </div>
        </h3>
        
        <h2 className="about-headers">DASI friendly venues</h2>
          <h3>
            <ul>
              <li>Asheville Christian Academy</li>
              <li>Asheville Community Theater</li>
              <li>Catawba Science Center</li>
              <li>Diana Wortham Theater</li>
              <li>Flat Rock Playhouse</li>
              <li>The Health Adventure</li>
              <li>Montford Park Players</li>
              <li>Southern Appalachian Repertory Theater (SART)</li>
              <li>Peace Center in Greenville, South Carolina</li>
            </ul>
          </h3>
        <h2 className="about-headers">Audio Description can be used for:</h2>
          <h3>
            <ul>
              <li>plays</li>
              <li>musical productions</li>
              <li>dance performances</li>
              <li>opera</li>
              <li>museum tours</li>
              <li>weddings</li>
              <li>private events</li>
              <li>special occasions</li>
            </ul>
          </h3>
    </div>
    )
}

export default EventsAndVenues;