function artistsReducer(state = {concerts: []}, action){
  switch (action.type) {
    case "LOAD_CONCERTS":
      return Object.assign({}, state, {concerts: action.payload})
    default:
      return state
  }
}

export default artistsReducer
