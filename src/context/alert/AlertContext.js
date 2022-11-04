import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  function init(initialState) {
    return null;
  }

  const [ state, dispatch ] = useReducer(alertReducer, initialState, init);


  return (
    <AlertContext.Provider value={ { alert: state, dispatch } }>
      { children }
    </AlertContext.Provider>
  );
};

export default AlertContext;