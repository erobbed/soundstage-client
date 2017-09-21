import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';

const Home = (props) => {
  console.log("Home Props", props)

  return (
    <div>
      <NavBar />
      <h1>Welcome to SoundStage!</h1>
      <h2>username: {props.user.username}</h2>
      <ul>
        {props.artists.map((artist, index) => <li key={index}><img src={artist.image_url} alt={artist.name}/>{artist.name}</li>)}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {user: state.auth.user, artists: state.auth.artists}
}

export default connect(mapStateToProps)(Home)
