import React, { useState } from 'react';
import PropTypes from 'prop-types';      // npm install prop-types
import MeteorDetails from './MeteorDetails';


function MeteorListItem({id, name}) {    // destructuring props to id and name
  const [details, setDetails] = useState(null);
  
  function handleLoadDetails() {
    ////////////////////////// fetch details with REST////////////////////////////////////

    // if (details) setDetails(null);
    // else {
    //   fetch(`https://serene-journey-54857.herokuapp.com/v1/meteors/${id}`)   // fetch meteor details
    //   .then((response) => response.json())
    //   .then((response => setDetails(response)));       // set state
    //   }

    ////////////////////////// fetch details with GraphQL /////////////////////////////////
    const GQL_API = `https://stormy-crag-48505.herokuapp.com/`;
    const GQL_QUERY = `
      query {
        meteor(id: ${id}) {
          status
          description
          velocity
        }
      }
    `;
    const variables = { id: id };

    if (details) setDetails(null);
    else {
      fetch(GQL_API, {                // fetch meteor details
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: GQL_QUERY,
          variables,
        })
      }) 
      .then((response) => response.json())
      .then((response => setDetails(response.data.meteor)));       // set state
    }
  }
  
  return (
    <div>
      <a id={id} href="#_{id}" onClick={handleLoadDetails}>
        {name}
      </a>
      {
        details && (
            <MeteorDetails
              status={details.status}
              description={details.description}
              velocity={details.velocity}
            />
        )
      }
    </div>
  )
}

// check props type
MeteorListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default MeteorListItem;