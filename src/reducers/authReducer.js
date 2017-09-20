function authReducer(state={
  loggedIn: false,
  user: {
    username: null,
    spotify_url: null,
    profile_img_url: null}
}, action){
  switch (action.type) {
    case "LOG_IN":
      return Object.assign({}, state, {loggedIn: true, user: action.payload.user})
    case "LOG_OUT":
      localStorage.removeItem('jwt')
      return Object.assign({}, state, {loggedIn: false, user: action.payload.user})
    default:
      return state
  }
}

export default authReducer
