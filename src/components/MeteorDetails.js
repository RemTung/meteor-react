import React from 'react'

const MeteorDetails = (props) => {
  // destructure the props to status, description, velocity
  return (
    <>
      <div><b>Status: </b>{props.status}</div>
      <div><b>Description: </b>{props.description}</div>
      <div><b>Velocity: </b>{props.velocity}</div>
    </>
  )
};

export default MeteorDetails;