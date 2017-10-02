import React from 'react';
import Explore from '../users/Explore';
import MapContainer from './MapContainer';
import { Button } from 'semantic-ui-react';

export default class ViewContainer extends React.Component{

  state = {
    button: "Table"
  }

  handleClick = (event) => {
    this.setState({button: event.target.name})
  }

  render(){
    return(
      <div>
        <Button.Group size='large'>
          <Button onClick={this.handleClick} name="Table">View as Table</Button>
          <Button.Or />
          <Button onClick={this.handleClick} name="Map">View as Map</Button>
        </Button.Group>
        <div className="home">
          {this.state.button === "Table" ? <Explore/> : <MapContainer/>}
        </div>
      </div>
    )
  }
}
