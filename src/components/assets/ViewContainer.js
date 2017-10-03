import React from 'react';
import Explore from '../users/Explore';
import MapContainer from './MapContainer';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { mapConcerts } from '../../actions/concertActions';

class ViewContainer extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    if (this.props.latlong && jwt){
      this.props.mapConcerts(this.props.latlong, jwt)
    }
  }

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
          <Button onClick={this.handleClick} active={this.state.button === "Table"} name="Table">View as Table</Button>
          <Button.Or />
          <Button onClick={this.handleClick} active={this.state.button === "Map"} name="Map">View as Map</Button>
        </Button.Group>
        <div className="home">
          {this.state.button === "Table" ? <Explore/> : <MapContainer/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {concerts: state.concerts.list, latlong: state.users.latlong}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({mapConcerts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer)
