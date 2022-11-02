import { createContext, useReducer } from 'react';
import githubReducer from '../GithubReducer';

export const GithubContext = createContext();

// Github url and token
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [], loading: false,
  };

  function init(initialState) {
    return {
      users: [], loading: false,
    };
  }


  const [ state, dispatch ] = useReducer(githubReducer, initialState, init);


  const fetchUsers = async () => {
    setLoading();

    const response = await fetch(`${ GITHUB_URL }/users`, {
      headers: {
        Authorization: `token ${ GITHUB_TOKEN }`
      }
    });

    const data = await response.json();
    dispatch({
               type: 'GET_USERS',
               payload: data,
             });
  };

  // Set Loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  return (
    <GithubContext.Provider value={ {
      users: state.users, loading: state.loading, dispatch, fetchUsers
    } }>
      { children }
    </GithubContext.Provider>
  );
};

