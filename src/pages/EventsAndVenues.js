import React from 'react'
import acts from '../data/events'
import season from '../data/date'

const EventsAndVenues = () => {
  
  const date = season;
  const events = acts;
  
  return (
    <div className="events-and-venues card">
      <h2 className="about-headers">Events and Venues</h2>
      <h3>
        DASI has described at many theaters and venues in WNC. We are portable,
        so we can take our equipment and provide AD at any theater that requests
        our services. We have a standing agreement with Asheville Community
        Theater (ACT) to describe the second weekend of Mainstage performances.
        ACT generously offers a complimentary ticket to the driver for a
        visually impaired person attending a DASI described performance. If
        there is an event not listed below that you would like to have
        described, contact the theater and ask them to provide AD through DASI.
      </h3>

      <h3>
        "Pre-Show description will be available on the website by noon the day
        before the first described performance of any production. Description
        can also be emailed upon request."
      </h3>

      <h2 className="about-headers">
        Productions at Asheville Community Theater
      </h2>
      <h2>
        <a href="https://ashevilletheatre.org/">
          https://ashevilletheatre.org/
        </a>
      </h2>
      <h3>
        Confirmed Shows for Description
        <ul>
          {date.map((date) => (
            <li key={date.startDate}>
              <span>{date.startDate}</span>
              <span> - </span>
              <span>{date.endDate}</span>
              <span> Season</span>
            </li>
          ))}

          {events.map((event) => (
            <div className="card">
              <li className="about-headers" key={event.playName}>
                <span className="event-title">{event.playName}</span>
                <span> | </span>
                <span className="event-title">{event.playDate}</span>
                <br></br>
                <span className="event-info-header">Description: </span>
                <br></br>
                <span className="event-info">{event.description}</span>
                <br></br>
                <span className="event-info-header">Pre-show Description: </span>
                <br></br>
                <span className="event-info">{event.preShowDescLink}</span>
                <br></br>
                <span className="event-info-header">Run Time: </span>
                <br></br>
                <span className="event-info">{event.runTime}</span>
                <br></br>
                <span className="event-info-header">Accessibility: </span>
                <br></br>
                <span className="event-info">{event.accessibility}</span>
                <br></br>
                <span className="event-info-header">Content Awareness: </span>
                <br></br>
                <span className="event-info">{event.contentAwareness}</span>
                <br></br>
              </li>
            </div>
          ))}
        </ul>
        <div className="act-shows">
          Friday and Saturday shows start at 7:30pm while Sunday matinee
          performances begin at 2:30pm. Tickets can be purchased through the ACT
          box office at 828-254-1320. ACT will provide a complimentary ticket to
          the driver of anyone using DASI! Other described performances will be
          listed here once they are confirmed with the theater.
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
  );
}

export default EventsAndVenues;