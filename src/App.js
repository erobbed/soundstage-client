import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import LogIn from './components/LogIn'
import Home from './components/Home'
import ConcertsContainer from './components/ConcertsContainer'
import ArtistsContainer from './components/ArtistsContainer'
import isAuthenticated from './components/hocs/AuthWrapper'
import AuthHandler from './auth/AuthHandler'
import 'semantic-ui-css/semantic.min.css';
import { withRouter } from 'react-router-dom'

const AuthedHome = isAuthenticated(Home)
const AuthedArtists = isAuthenticated(ArtistsContainer)
const AuthedConcerts = isAuthenticated(ConcertsContainer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path='/' render={(props) => <AuthedHome {...props} loading={this.props.loading}/>}/>
            <Route exact path='/artists' component={AuthedArtists}/>
            <Route exact path='/artists/:artist/concerts' component={AuthedConcerts} />
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
