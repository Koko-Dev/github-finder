import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/GithubContext';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import { getUser } from '../context/github/GithubActions';

function User() {
  const { users, user, loading, dispatch } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const userData = await getUser(params.login)

      console.log('userData:  ', typeof userData);

      dispatch({ type: 'GET_USER', payload: userData })
    }

    getUserData()

  }, [dispatch, params.login])

  if (loading) {
    return <Spinner/>;
  }

  const {
    avatar_url,
  } = user ? user : {}

  console.log('user is:',  user);

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

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="avatar" />
              </figure>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default User;