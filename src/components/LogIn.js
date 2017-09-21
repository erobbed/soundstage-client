import React from 'react';
import { Button } from 'semantic-ui-react';

const LogIn = (props) => {
  console.log("I'm in the LogIn component", props);
  return (
    <div>
      <center>
        <Button as="a" href="http://localhost:3000/api/v1/login">Log In With Spotify</Button>
      </center>
    </div>
  )
}

export default LogIn
