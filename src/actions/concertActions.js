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
