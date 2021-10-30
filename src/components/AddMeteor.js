import React, { useState } from 'react';

const AddMeteor = (props) => {
  const [meteorName, setMeteorName] = useState('');  // change state when texts are entered (hook)

  const handleChangeName = (event) => {
    setMeteorName(event.target.value);
  }

  const handleAddMeteor = () => {
    // add meteor
    props.onAddMeteor(meteorName);
  }

  return (
    <div>
      <input type='text' value={meteorName} onChange={handleChangeName}/>
      <button onClick={handleAddMeteor}>Add Meteor</button>
    </div>
  );
}

export default AddMeteor;
