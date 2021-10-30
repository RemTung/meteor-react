import React, { Component } from 'react';
import MeteorListItem from './MeteorListItem';
// import AddMeteor from './AddMeteor';

export default class MeteorsList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {meteors: []};
  }

  componentDidMount() {
    fetch('https://quiet-anchorage-42640.herokuapp.com/v1/meteors')    // fetch meteors from rest
    .then((response) => response.json())  
    .then((result) => this.setState({ meteors: result }));    // store in this.state               
  }

  renderMeteors() {
    return this.state.meteors.map((meteor) => 
      <MeteorListItem key={meteor.id} 
                      id={meteor.id} 
                      name={meteor.name}          // props to MeteorListItem
      ></MeteorListItem>);
  }

  handleAddMeteor(name) {                         // props to AddMeteor
    const newMeteor = { id: Date.now().toString(), name: name};
    const newMeteorsList = [...this.state.meteors, newMeteor];

    this.setState({ meteors: newMeteorsList });    // update the state
  }

  render() {    
    return (
      <>
        <h1>Meteor Shower Info</h1>                           
        {this.renderMeteors()}
      </>)
  }
}

