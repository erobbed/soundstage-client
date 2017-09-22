import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import ArtistsContainer from './ArtistsContainer'
import ConcertsContainer from './ConcertsContainer'

const Home = (props) => {

  return (
    <div>
      <NavBar className="nav" history={props.history}/>
      <h1 id="title">SoundStage</h1>
      <center>
        <ArtistsContainer/>
        {props.concertsLoaded ? <ConcertsContainer/> : null }
      </center>
    </div>
  )
}

function mapStateToProps(state) {
  return {user: state.auth.user, artists: state.auth.artists, concertsLoaded: state.concerts.clickedArtist}
}

export default connect(mapStateToProps)(Home)
