import { useContext } from 'react';
import { GithubContext } from '../context/github/GithubContext';
import { useParams } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';

function User() {
  const { getUser, user, loading, dispatch } = useContext(GithubContext);

  const params = useParams();

  if (loading) {
    return <Spinner/>;
  }


  return (
    <div>{ params.login }</div>
  );
}

export default User;