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
          <Loader size='massive' className="radio">
            <svg width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-radio" style="background: none;">
                <circle cx="28" cy="75" r="11" ng-attr-fill="{{config.c1}}" fill="#1ed660">
                  <animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="0s" repeatCount="indefinite"></animate>
                </circle>
                <path d="M28 47A28 28 0 0 1 56 75" fill="none" ng-attr-stroke="{{config.c2}}" stroke-width="10" stroke="#1ed660">
                  <animate attributeName="stroke-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="0.1s" repeatCount="indefinite"></animate>
                </path>
                <path d="M28 25A50 50 0 0 1 78 75" fill="none" ng-attr-stroke="{{config.c3}}" stroke-width="10" stroke="#1ed660">
                  <animate attributeName="stroke-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="0.2s" repeatCount="indefinite"></animate>
                </path>
              </svg>
            <p className="load1" data-text="Loading your artists...">Loading your artists...</p>
          </Loader>
        </Dimmer> : null }
        <WrappedComponent {...props} />
      </div>
    )
  }
}
