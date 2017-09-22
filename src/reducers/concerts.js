function concertsReducer(state={list: [], clickedArtist: null}, action){
  switch (action.type) {
    case "GET_CONCERTS":
      return Object.assign({}, state, {
        list: action.payload.concerts, clickedArtist: action.payload.artist
      })
    default:
      return state
  }
}

export default concertsReducer
