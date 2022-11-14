import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [], user: {}, repos: [], loading: false,
  };

  function init(initialState) {
    return {
      users: [], user: {}, repos: [], loading: false,
    };
  }

  const [ state, dispatch ] = useReducer(githubReducer, initialState, init);

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
      <GithubContext.Provider value={ {
        ...state,
        dispatch,
      } }>
        { children }
      </GithubContext.Provider>
  );
};
