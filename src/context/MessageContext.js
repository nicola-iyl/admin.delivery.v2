import creaContext from "./_creaContext";

const ilreducer = (state, action) => {
  switch (action.type) {
    case "add_message":
      return { ...state, message: action.payload };
    case "add_error":
      return { ...state, error: action.payload };
    case "add_validation_errors":
      return { ...state, validations: action.payload };
    case "clear_messages":
      return { ...state, error: "", message: "" };
    case "reset_all":
      return { ...state, error: "", message: "", validations: null };
    case "reset_error":
      return { ...state, validations: {...state.validations, [action.payload] : ''}}
    default:
      return state;
  }
};

const storeIniziale = {
  error:       "",
  message:     "",
  validations: null,
}

//per aggiungere un messaggio generico --message--
const addMessage = (dispatch) => {
  return (msg) => {
    dispatch({ type:'add_message', payload: msg } )
  }
}

//per resettare tutti i messaggi di errore e non, eccetto validazioni
const clearMessages = (dispatch) => {
  return () => {
    dispatch({ type:'clear_messages'})
  }
}

//per resettare tutti i messaggi di errore e non
const resetAll = (dispatch) => {
  return () => {
    dispatch({ type:'reset_all'})
  }
}

//per aggiungere gli errori singoli o un oggetto con molteplici es. validazione
const addError = (dispatch) => {
  return (error) => {
    if(typeof error === 'object'){
      dispatch({ type:'add_validation_errors', payload: error})
    }
    else{
      dispatch({ type:'add_error', payload:error } )
    }
  }
}

//per resettare un errore di validazione
const resetValidation = (dispatch) => {
  return (field) => {
    dispatch({ type:'reset_error', payload: field })
  }
}

const actions = {
  addMessage,
  clearMessages,
  resetValidation,
  addError,
  resetAll,
};

export const {Provider, Context} = creaContext( ilreducer, actions, storeIniziale );