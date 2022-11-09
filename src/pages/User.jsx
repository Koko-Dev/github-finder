import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/GithubContext';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';

function User() {
  const { getUser, user, loading, dispatch } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login)
  }, [])

  if (loading) {
    return <Spinner/>;
  }

  const {
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user


  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link
            to='/'
            className='btn btn-ghost'
          >
            Back to Search
          </Link>
        </div>
      </div>
    </>
  );
}

export default User;