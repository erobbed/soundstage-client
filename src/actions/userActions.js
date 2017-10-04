export function userConcerts(jwt){
  const body = {
    headers: {
      "Authorization":`Bearer ${jwt}`,
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }

  return(dispatch) => {
    return fetch(`https://soundstage-api.herokuapp.com/api/v1/users/:user/concerts/`, body)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'USER_CONCERTS',
      payload: res.concerts,
    })
  )}
}


export function addConcert(jwt, concert, id){
  const body = {
    method: 'POST',
    headers: {
      "Authorization":`Bearer ${jwt}`,
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }
  return(dispatch) => {
    return fetch(`https://soundstage-api.herokuapp.com/api/v1/users/${id}/concerts/${concert.id}`, body)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'ADD_CONCERT',
      payload: res.concerts
    })
  )}
}

export function removeConcert(jwt, concert, id){
  const body = {
    method: 'DELETE',
    headers: {
      "Authorization":`Bearer ${jwt}`,
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }
  return(dispatch) => {
    return fetch(`https://soundstage-api.herokuapp.com/api/v1/users/${id}/concerts/${concert.id}`, body)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'REMOVE_CONCERT',
      payload: res.concerts
    })
  )}
}


export function geocode(location){
  return (dispatch) =>{
      return fetch(`https://soundstage-api.herokuapp.com/api/v1/geocode/${location}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(
        {
          type: "CHANGE_LOCATION",
          payload: res
        })
      }
  )}
}
