export function getConcerts(artist){

  return(dispatch) => {
    return fetch(`http://localhost:3000/api/v1/concerts/${artist.name}`)
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
