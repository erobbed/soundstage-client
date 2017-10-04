import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../assets/NavBar';
import { Dimmer, Loader } from 'semantic-ui-react'

export default function isAuthenticated(WrappedComponent){

  return function (props) {
    if (!localStorage.getItem('jwt') && !props.loading) {
      return <Redirect to='/login' />
    }

    // const loader = ["Loading your Artists", "Comparing your tastes to some really cool people", "Sprongling Mozzers", "Unhooking Lobsters", "Engines Go"]

    return (
      <div>
        <NavBar className="nav" history={props.history}/>
        {props.loading ? <Dimmer active>
          <Loader size='massive' className="radio"></Loader>
        </Dimmer> : null }
        <WrappedComponent {...props} />
      </div>
    )
  }
}
