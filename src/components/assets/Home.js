import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {

  return (
    <div>
      <h1 id="title">SoundStage</h1>
      <div>
        <img src="/show.jpg" alt="home" id="home"/>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {user: state.auth.user, artists: state.auth.artists, concertsLoaded: state.concerts.clickedArtist}
}

export default connect(mapStateToProps)(Home)
