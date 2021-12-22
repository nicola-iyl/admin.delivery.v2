import creaContext from "./_creaContext";

const ilreducer = ( state, action ) => {
  switch (action.type) {
    case "set_user":
      return { ...state, isAuth: true, token: action.payload.token, username: action.payload.username };
    case "logout":
      return { ...state, isAuth:false, username: "", token: null };
    default:
      return state;
  }
}

const state = {
  isAuth:       localStorage.getItem( 'token' ) ? true : false,
  token:        localStorage.getItem( 'token' ) ? localStorage.getItem('token') : '',
  username:     localStorage.getItem( 'username' ) ? localStorage.getItem('username') : '',
}

const setAuth = (dispatch) => {
  return function( token, username ){
    localStorage.setItem( 'token', token );
    localStorage.setItem( 'username', username );
    dispatch({ type: 'set_user', payload: { token:token,username:username } } )
  }
}

const removeAuth = (dispatch) => {
  return () => {
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'username' );
    dispatch( { type:"logout" } ); 
  }
}

const actions = {
  setAuth,
  removeAuth
};



export const {Provider, Context} = creaContext( ilreducer, actions, state);