export function authorize(code){
  console.log("fetching user from back-end");
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
    geo.getCurrentPosition((position) => dispatch({type: "SET_LOCATION", payload: position}) )
    return fetch(`http://localhost:3000/api/v1/users?code=${code}`, body)
    .then(res => res.json())
      .then(res => {
        console.log("fetched, now logging in");
        dispatch({type: 'LOG_IN', payload: {
            user: res.user,
            jwt: res.jwt,
            artists: res.user.artists
          }
      })
    })
  }
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
