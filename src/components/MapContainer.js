import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { view } from '../actions/concertActions'

export class MapContainer extends React.Component {

  constructor(){
    super()

    this.state={
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onInfoWindowClose = (props) => {
    if (this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const concerts = this.props.concerts.map((concert, index) => <Marker key={index} concert={concert} name={`${concert.venue}:\n ${concert.date} at ${concert.time}`} onClick={this.onMarkerClick} position={{lat: concert.lat, lng: concert.long}} />)
    console.log(this.state.selectedPlace);
    return (
      <Map onClick={this.onInfoWindowClose} google={this.props.google} zoom={3} initialCenter={{lat: this.props.latlong.coords.latitude, lng: this.props.latlong.coords.longitude}}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        {concerts}

        <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            <div onClick={this.props.view(this.state.selectedPlace.concert)}>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

function mapStateToProps(state){
  return {concerts: state.concerts.list, latlong: state.users.latlong}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({view}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: ("AIzaSyDztpz0QZxu3ciLy2RL7Y2ezCCkvyHFy7c")
})(MapContainer))
