import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import LogIn from './components/LogIn'
import Home from './components/Home'
import isAuthenticated from './components/hocs/AuthWrapper'
import AuthHandler from './auth/AuthHandler'
import 'semantic-ui-css/semantic.min.css';
import { withRouter } from 'react-router-dom'

const AuthedHome = isAuthenticated(Home)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path="/" render={(props) => <AuthedHome {...props} loading={this.props.loading}/>}/>
            <Route exact path="/login" render={() => <LogIn loggedIn={this.props.loggedIn}/>}/>
            <Route exact path="/login/authorize" component={AuthHandler}/>
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {loggedIn: state.auth.loggedIn, loading: state.auth.loading}
}

export default withRouter(connect(mapStateToProps)(App));
