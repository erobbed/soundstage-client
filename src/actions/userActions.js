export function userConcerts(jwt){
  const body = {
    headers: {
      "Authorization":`Bearer ${jwt}`,
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }

  return(dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/:user/concerts/`, body)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'USER_CONCERTS',
      payload: res.concerts,
    })
  )}
}

//add route on api to handle users/:user/concerts and controller method in concerts_controller: @user = User.find(current_user)
//render json: {concerts: @user.concerts }


export function addConcert(jwt, concert, id){
  const body = {
    method: 'POST',
    headers: {
      "Authorization":`Bearer ${jwt}`,
      "Content-Type":"application/json",
      "Accept":"application/json"
    }
  }

  return(dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${id}/concerts/concert=${concert.id}`, body)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'ADD_CONCERT'
      payload: res.concerts,
    })
  )}
}

//add route on api to handle users/:user/concerts and controller method in concerts_controller: @user = User.find(current_user)
// @concert = Concert.find(params['concert'].id)
// @user.concerts << @concert
//render json: {concerts: @user.concerts }
