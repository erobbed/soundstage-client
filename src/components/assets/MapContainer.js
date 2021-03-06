import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { view, reset } from '../../actions/concertActions'

export class MapContainer extends React.Component {

  constructor(props){
    super(props)

    this.state={
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latlong: props.latlong
    }
  }

  componentDidMount(){
    this.props.reset()
  }

  componentWillRecieveProps(nextProps){
    this.setState({latlong: nextProps.latlong})
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }, () => {
      this.props.view(this.state.selectedPlace.concert)
    })
  }

  onInfoWindowClose = (props) => {
    if (this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      }, () => {
        this.props.reset()
      })
    }
  }

  render() {
    const upcoming = this.props.concerts.filter((concert, index) => new Date(concert.date) >= Date.now() )
    const concerts = upcoming.map((concert, index) => <Marker key={index} concert={concert} name={`${concert.name}:\n ${concert.date} at ${concert.time}`} onClick={this.onMarkerClick} position={{lat: concert.lat, lng: concert.long}} icon={{url: '/concert.svg'}} />)
    const base = this.state.latlong ? {lat: this.state.latlong.coords.latitude, lng: this.state.latlong.coords.longitude} : {lat: 40.7128, lng: -74.0061}

    return (
      <Map clickableIcons={true} onClick={this.onInfoWindowClose} google={this.props.google} zoom={4} initialCenter={base}>

        <Marker onClick={this.onMarkerClick} name={'Current Location'}  icon={{url: '/home.svg'}}/>

        {concerts}

        <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

function mapStateToProps(state){
  return {concerts: state.concerts.list, latlong: state.users.latlong, updates: state.users.updates}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({view, reset}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: ("AIzaSyDztpz0QZxu3ciLy2RL7Y2ezCCkvyHFy7c")
})(MapContainer))
