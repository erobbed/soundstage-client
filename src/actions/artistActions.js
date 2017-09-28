export function loadConcerts(){

  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/concerts')
    .then(res => res.json())
    .then(res => dispatch({
      type: "LOAD_CONCERTS",
      payload: res.concerts
    }))
  }
}
