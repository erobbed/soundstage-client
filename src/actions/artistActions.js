export function loadConcerts(position, jwt){
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
      type: "LOAD_CONCERTS",
      payload: res.concerts
    }))
  }
}
