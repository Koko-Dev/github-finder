import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  function init(initialState) {
    return null;
  }

  const [ state, dispatch ] = useReducer(alertReducer, initialState, init);

  // Set an alert
  const setAlert = (message, type) => {
    dispatch({
               type: 'SET_ALERT',
               payload: { message, type }
             });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };


  return (
    <AlertContext.Provider value={ { alert: state, setAlert } }>
      { children }
    </AlertContext.Provider>
  );
};

export default AlertContext;