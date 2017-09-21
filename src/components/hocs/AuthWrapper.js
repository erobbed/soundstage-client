import React from 'react';
import { Redirect } from 'react-router-dom';

export default function isAuthenticated(WrappedComponent){
  return function (props) {
    console.log("AuthWrapper Props", props);
      if (!localStorage.getItem('jwt')) {
        console.log("Redirecting back to login because I don't have a token...");
        return <Redirect to='/login' />
      }
      return <WrappedComponent {...props} />
    }
}
