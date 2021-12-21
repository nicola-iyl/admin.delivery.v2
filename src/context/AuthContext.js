import creaContext from "./_creaContext";

console.log('file_AuthContext.js');

const ilreducer = ( state, action ) => {
  switch (action.type) {
    case "set_user":
      return { ...state, isAuth: true, token: action.payload.token, username: action.payload.username };
    default:
      return state;
  }
}

const state = {
  isAuth:       localStorage.getItem('token') ? true : false,
  token:        localStorage.getItem('token') ? localStorage.getItem('token') : '',
  username:     localStorage.getItem('username') ? localStorage.getItem('username') : '',
}

const setAuth = (dispatch) => {
  return function( token, username ){
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    dispatch({ type: 'set_user', payload: { token:token,username:username } } )
  }
}

const actions = {
  setAuth
};



export const {Provider, Context} = creaContext( ilreducer, actions, state);