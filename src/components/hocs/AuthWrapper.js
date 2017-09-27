import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../assets/NavBar';
import { Dimmer, Loader } from 'semantic-ui-react'

export default function isAuthenticated(WrappedComponent){
  return function (props) {
    if (!localStorage.getItem('jwt') && !props.loading) {
      console.log("Redirecting back to login because I don't have a token...");
      return <Redirect to='/login' />
    }

    return (
      <div>
        <NavBar className="nav" history={props.history}/>
        {props.loading ? <Dimmer active>
          <Loader size='massive' className="radio" />
        </Dimmer> : null }
        <WrappedComponent {...props} />
      </div>
    )
  }
}
