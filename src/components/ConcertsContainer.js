import React from 'react'
import MapContainer from './MapContainer'
import { connect } from 'react-redux'
import Concert from './Concert'
import Iframe from './Iframe'

const ConcertsContainer = (props) => {
  return (
    <div>
      <div className="top">
        <h2>{props.artist ? `Concerts by ${props.artist.name}` : null}</h2>
      </div>
      <div style={{height: "500px", width: "500px", position: "relative", float: "left", margin: "1em", marginLeft: "2.5%"}}>
        <MapContainer/>
      </div>
      <div style={{float: "left", margin: "15px"}}>
        {props.clicked ? <Concert concert={props.clicked}><Iframe concert={props.clicked}/></Concert> : null}
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {artist: state.concerts.clickedArtist, clicked: state.concerts.clicked}
}

export default connect(mapStateToProps)(ConcertsContainer)
