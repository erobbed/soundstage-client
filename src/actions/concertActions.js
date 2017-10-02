export function getConcerts(artist){

  return(dispatch) => {
    return fetch(`http://localhost:3000/api/v1/concerts/${artist}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'GET_CONCERTS',
      payload: {
        concerts: res.concerts,
        artist: artist
      }
    }))
  }
}

export function view(clicked){
  return {
    type: "VIEW_CONCERT",
    payload: clicked
  }
}

export function reset(){
  return {
    type: "CLEAR_CONCERT",
  }
}

export function loadVideo(artist){
  return (dispatch) => {
    const apikey = "AIzaSyDztpz0QZxu3ciLy2RL7Y2ezCCkvyHFy7c"
    return fetch(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&q=${artist}+live+concert&part=snippet&type=video`)
    .then(res => res.json())
    .then(res => dispatch({type: "LOAD_VIDEO", payload: res.items[0].id.videoId}))
  }
}

export function allConcerts(jwt, id){
  const body = {
    method: 'GET',
    headers: {
      "Authorization":`Bearer ${jwt}`,
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${id}/concerts/all`, body)
    .then(res => res.json())
    .then(res => dispatch({type: 'ALL_CONCERTS', payload: res.concerts}))
  }
}

export function mapConcerts(position, jwt){
  const req = {
    method: 'POST',
    headers: {
      Authorization:`Bearer ${jwt}`,
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
  }

  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/concerts', req)
    .then(res => res.json())
    .then(res => dispatch({
      type: "MAP_CONCERTS",
      payload: res.concerts
    }))
  }
}
