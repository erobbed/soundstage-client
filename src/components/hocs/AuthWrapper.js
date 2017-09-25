import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../NavBar';

export default function isAuthenticated(WrappedComponent){
  return function (props) {
    if (!localStorage.getItem('jwt') && !props.loading) {
      console.log("Redirecting back to login because I don't have a token...");
      return <Redirect to='/login' />
    }
    
    return (
      <div>
        <NavBar className="nav" history={props.history}/>
        <WrappedComponent {...props} />
      </div>
    )
  }
}
