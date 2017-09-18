import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router'

const button = () => { return <Button as="a" href="http://localhost:3000/api/v1/login">Log In</Button>}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={'spotify-logo.png'} className="logo" height='100' alt="logo" />
          <h2>Welcome to SoundStage</h2>
        </div>
        <p className="App-intro">
          <Route exact path="login" component={button}/>
        </p>
      </div>
    );
  }
}

export default App;
