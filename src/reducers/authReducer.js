function authReducer(state={
  loggedIn: false,
  loading: false,
  artists: [],
  user: {
    username: null,
    spotify_url: null,
    profile_img_url: null
  }
}, action){
  switch (action.type) {
    case 'LOG_IN':
      localStorage.setItem('jwt', action.payload.jwt)
      localStorage.setItem('id', action.payload.id)
      return Object.assign({}, state, {loggedIn: true, loading: false, user: action.payload.user, artists: action.payload.artists})
    case 'LOG_OUT':
      localStorage.clear()
      return Object.assign({}, state, {loggedIn: false, user: action.payload.user})
    case 'LOADING':
      return Object.assign({}, state, {loading: true})
    default:
      return state
  }
}

export default authReducer
