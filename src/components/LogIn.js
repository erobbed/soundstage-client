import React from 'react';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const LogIn = (props) => {
  console.log("I'm in the LogIn component", props);
  if (localStorage.getItem('jwt')) {
    console.log("Redirecting to home because I've got a token");
    return <Redirect to='/' />
  }
  return (
    <div>
      <center>
        <Button as="a" href="http://localhost:3000/api/v1/login">Log In With Spotify</Button>
      </center>
    </div>
  )
}

export default LogIn
