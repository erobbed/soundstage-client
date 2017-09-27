function usersReducer(state = {location: '', userConcerts: []}, action){
  switch (action.type) {
    case "SET_LOCATION":
      return Object.assign({}, state, {latlong: action.payload})
    case "USER_CONCERTS":
      return Object.assign({}, state, {userConcerts: action.payload})
    case "ADD_CONCERT":
      return Object.assign({}, state, {userConcerts: action.payload})
    case "REMOVE_CONCERT":
      return Object.assign({}, state, {userConcerts: action.payload})
    default:
      return state
  }

}

export default usersReducer
