import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

class UserProfile extends React.Component {
  componentDidMount() {
    const { getUser, getUserRepos } = this.props;
    getUser(this.props.match.params.login);
    getUserRepos(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      hireable,
      company,
      public_gists,
    } = this.props.user;
    const { loading, repos } = this.props;
    if (loading) {
      return <div className="loading" />;
    }
    return (
      <div className="container">
        <div className="card col-md-12 text-center profilecard mt-5 ">
          <div className="hireable-wrapper">
            <Link to="/" className="btn btn-info ">
              Back to users
            </Link>
            <h4 className="mx-2 mt-3 " style={{ fontSize: 18 }}>
              Hireable :
            </h4>{' '}
            {hireable ? (
              <>
                <i className="fas fa-check-circle text-success fa-lg" />
              </>
            ) : (
              <>
                <i className="fas fa-times-circle text-danger fa-lg" />
              </>
            )}
          </div>
          <div className="all-center">
            <img
              src={avatar_url}
              alt={name}
              className="round-img"
              style={{ width: 150 }}
            />
          </div>
          <h3>Name: {name}</h3>
          <p>Location: {location}</p>

          {bio && (
            <>
              {' '}
              <h3>Bio</h3> <p className="bio">{bio}</p>{' '}
            </>
          )}

          <ul>
            <li>
              {login && (
                <>
                  {' '}
                  <strong>Username: </strong> {login}{' '}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  {' '}
                  <strong>Company: </strong> {company}{' '}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  {' '}
                  <strong>Website: </strong> {blog}{' '}
                </>
              )}
            </li>
          </ul>
          <div className="badge badge-primary followers badge-one">
            Followers: {followers}
          </div>
          <div className="badge badge-warning followers badge-two">
            Github Repos: {public_repos}
          </div>
          <div className="badge badge-danger followers badge-three">
            Following: {following}
          </div>
          <div className="badge badge-dark  followers badge-four">
            Public Gists: {public_gists}
          </div>

          <a
            href={html_url}
            target="_blank"
            className="btn btn-dark text-white"
          >
            {' '}
            Visit Github Profile
          </a>
        </div>
        <h3 className="text-center my-5">{name}s Github Repos</h3>
        <Repos repos={repos} />
      </div>
    );
  }
}

export default UserProfile;

UserProfile.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};
