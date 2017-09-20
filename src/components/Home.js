import React from 'react';
import { connect } from 'react-redux'

const Home = (props) => {
  console.log("Home Props", props)
  return (
    <div>
      <h1>Welcome to SoundStage!</h1>
      <h2>username: {props.user.username}</h2>

    </div>
  )
}

function mapStateToProps(state) {
  return {user: state.auth.user}
}

export default connect(mapStateToProps)(Home)
