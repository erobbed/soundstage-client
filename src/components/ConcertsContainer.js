import React from 'react';
import MapContainer from './MapContainer';
import { connect } from 'react-redux';
import { getConcerts } from '../actions/concertActions';
import { userConcerts } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import Concert from './Concert';
import Iframe from './Iframe';

class ConcertsContainer extends React.Component{

  componentDidMount(){
    const artist = localStorage.getItem('artist')
    const jwt = localStorage.getItem('jwt')
    this.props.getConcerts(artist)
    this.props.userConcerts(jwt)
  }

  render(){
    return (
      <div>
        <div className="top">
          <h2>{this.props.artist ? `Concerts by ${this.props.artist}` : null}</h2>
        </div>
        <div style={{height: "500px", width: "500px", position: "relative", float: "left", margin: "1em", marginLeft: "2.5%"}}>
          <MapContainer/>
        </div>
        <div style={{float: "left", margin: "15px"}}>
          {this.props.clicked ? <Concert concert={this.props.clicked}><Iframe concert={this.props.clicked}/></Concert> : null}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getConcerts, userConcerts}, dispatch)
}

function mapStateToProps(state){
  return {artist: state.concerts.clickedArtist, clicked: state.concerts.clicked}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertsContainer)
