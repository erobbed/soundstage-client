import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import LogIn from './components/assets/LogIn'
import Home from './components/assets/Home'
import ConcertsContainer from './components/concerts/ConcertsContainer'
import ArtistsContainer from './components/artists/ArtistsContainer'
import ConcertsList from './components/concerts/ConcertsList'
import Explore from './components/users/Explore'
import isAuthenticated from './components/hocs/AuthWrapper'
import AuthHandler from './auth/AuthHandler'
import { currentUser } from './actions/authActions'
import 'semantic-ui-css/semantic.min.css';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

const AuthedHome = isAuthenticated(Home)
const AuthedArtists = isAuthenticated(ArtistsContainer)
const AuthedConcerts = isAuthenticated(ConcertsContainer)
const AuthedList = isAuthenticated(ConcertsList)
const AuthedExplore = isAuthenticated(Explore)

class App extends Component {

  componentDidMount(){
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return this.props.currentUser(jwt)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path='/' render={(props) => <AuthedHome {...props} loading={this.props.loading}/>}/>
            <Route exact path='/artists' component={AuthedArtists}/>
            <Route exact path='/artists/:artist/concerts' component={AuthedConcerts} />
            <Route exact path='/concerts' component={AuthedList}/>
            <Route exact path='/explore' component={AuthedExplore} loading={this.props.loading}/>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({currentUser}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
