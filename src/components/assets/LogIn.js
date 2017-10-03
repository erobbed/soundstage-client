import React from 'react';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const LogIn = (props) => {
  if (localStorage.getItem('jwt')) {
    return <Redirect to='/' />
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexWrap: 'wrap', verticalAlign: 'middle'}}>
      <div>
        <h2 id="login">Want to know where your favorite artist is playing next?</h2>
        <h1 id="title">SoundStage</h1>
      </div>
      <div style={{width: '300px'}}>
        <img width="200" src="Spotify_logo_with_text.svg.png" alt="Spotify" style={{paddingBottom: '5px'}}/>
        <Button className="login" content='Log In With Spotify' as="a" href="http://localhost:3000/api/v1/login" icon='sign in' labelPosition='right'></Button>
      </div>
    </div>
  )
}

export default LogIn
