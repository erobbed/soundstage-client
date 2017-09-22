import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import ArtistsContainer from './ArtistsContainer'

const Home = (props) => {
  console.log("Home Props", props)

  return (
    <div>
      <NavBar className="nav"/>
      <h1 id="title">SoundStage</h1>
      <center>
        <ArtistsContainer/>
      </center>
    </div>
  )
}

function mapStateToProps(state) {
  return {user: state.auth.user, artists: state.auth.artists}
}

export default connect(mapStateToProps)(Home)
