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
    return fetch(`http://localhost:3000/api/v1/users?code=${code}`, body)
    .then(res => res.json())
      .then(res => {
          localStorage.setItem('jwt', res.jwt);
           dispatch({type: 'LOG_IN', payload: {user: res.user}})
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
