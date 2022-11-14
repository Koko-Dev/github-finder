import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ repos }) {

  return (
      <div>
        <div>
          <h2>Latest Repositories</h2>
          { repos && repos.map((repo) => (
              <RepoItem key={ repo.id } repo={ repo } />
          ))
          }
        </div>
      </div>
  )
}

RepoList.checkPropTypes = {
  repos: PropTypes.array.isRequired,
}


export default RepoList;
