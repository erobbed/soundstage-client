function concertsReducer(state={list: [], clickedArtist: null, clicked: ""}, action){
  switch (action.type) {
    case "GET_CONCERTS":
      return Object.assign({}, state, {
        list: action.payload.concerts, clickedArtist: action.payload.artist
      })
    case "VIEW_CONCERT":
      console.log(action.payload)
      return Object.assign({}, state, {clicked: action.payload})
    default:
      return state
  }
}

export default concertsReducer
