import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch'

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const responseData = async () => {
      await fetch("https://www.dnd5eapi.co/api/spells/fireball/")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    responseData()
  }, [])
  
  console.log(data)
  
  const name = data.name
  

  return(
    <div className="home-container card">
      <ul>
        <li className="card-line-item">
          <h2>
            {name}
            The mission of Descriptive Audio for the Sight Impaired (DASI) is to provide audio description for live theater and other events in the Asheville, NC area.
          </h2>
        </li>
        <li className="card-line-item">
          <h2>
            We own our own equipment for audio description, which means that DASI is portable- we are not tied down to just one theater.
          </h2>
        </li>
        <li className="card-line-item">
          <h2>
            Be sure to ask your favorite local theater to offer audio description by DASI!
          </h2>
        </li>
        <li className="card-line-item">
          <h2>
            DASI is a nonprofit community organization founded by Bob Brummond in 2001.
          </h2>
        </li>
      </ul>
         
    </div>
    )
}

export default Home;