function usersReducer(state = {location: ''}, action){
  switch (action.type) {
    case "SET_LOCATION":
      return Object.assign({}, state, {latlong: action.payload})
    default:
      return state
  }

}

export default usersReducer
