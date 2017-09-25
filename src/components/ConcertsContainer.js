import React from 'react'
import ConcertsList from './ConcertsList'
import { connect } from 'react-redux'

const ConcertsContainer = (props) => {
  return (
    <div>
      <div className="top">
        <h2>{props.artist ? `Concerts by ${props.artist.name}` : null}</h2>
      </div>
      <ConcertsList/>
    </div>
  )
}

function mapStateToProps(state){
  return {artist: state.concerts.clickedArtist}
}

export default connect(mapStateToProps)(ConcertsContainer)
