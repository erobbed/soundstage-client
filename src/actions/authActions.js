export function authorize(code){
  const body = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': `Token token=${localStorage.getItem('jwt')}`
    }
  }

  return (dispatch) => {
    dispatch({type: 'LOADING'})
    const geo = navigator.geolocation
    geo.getCurrentPosition((position) => {
      dispatch({type: "SET_LOCATION", payload: position})
      return fetch(`https://soundstage-api.herokuapp.com/api/v1/users?code=${code}`, body)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'LOG_IN',
          payload: {
            user: res.user,
            jwt: res.jwt,
            artists: res.user.artists,
            id: res.user.id
          }
        })
      })
    }
  )}
}

export function logOut(){
  return {
    type: "LOG_OUT",
    payload: {
      user: {
        username: null,
        spotify_url: null,
        profile_img_url: null
      }
    }
  }
}

export function currentUser(jwt){
  const body = {
    headers: {
      "Authorization":`Bearer ${jwt}`,
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    const geo = navigator.geolocation
    geo.getCurrentPosition((position) => {
      dispatch({type: "SET_LOCATION", payload: position})
      return fetch('https://soundstage-api.herokuapp.com/api/v1/me', body)
      .then(res => res.json())
      .then(res => {
          dispatch({type: "LOG_IN", payload: {
            user: res.user,
            jwt: jwt,
            artists: res.user.artists,
            id: res.user.id
          }
        })
      })
    })
  }
}
