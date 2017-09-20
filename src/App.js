import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import LogIn from './components/LogIn'
import Home from './components/Home'
import NavBar from './components/NavBar'
import AuthHandler from './auth/AuthHandler'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-intro">
          <Switch>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/authorize" component={AuthHandler}/>
          </Switch>
          {this.props.loggedIn ? null : <Redirect to='/login' />}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {loggedIn: state.auth.loggedIn}
}

export default connect(mapStateToProps)(App);
