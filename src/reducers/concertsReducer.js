function concertsReducer(state={list: [], clickedArtist: null, clicked: "", videoId: ""}, action){
  switch (action.type) {
    case "GET_CONCERTS":
      return Object.assign({}, state, {
        list: action.payload.concerts, clickedArtist: action.payload.artist
      })
    case "VIEW_CONCERT":
      return Object.assign({}, state, {clicked: action.payload})
    case "LOAD_VIDEO":
      return Object.assign({}, state, {videoId: action.payload})
    default:
      return state
  }
}

export default concertsReducer
