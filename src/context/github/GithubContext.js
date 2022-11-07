import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

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
      users: [], user: {}, loading: false,
    };
  }

  const [ state, dispatch ] = useReducer(githubReducer, initialState, init);

  // Get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({ q: text });

    const response = await fetch(
      `${ GITHUB_URL }/search/users?${ params }`,
      {
        headers: {
          Authorization: `token ${ GITHUB_TOKEN }`
        }
      });

    const { items } = await response.json();
    dispatch({
               type: 'GET_USERS',
               payload: items,
             });
  };


  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider value={ {
      users: state.users,
      loading: state.loading,
      dispatch,
      searchUsers
    } }>
      { children }
    </GithubContext.Provider>
  );
};

