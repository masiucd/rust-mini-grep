import React from 'react';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  componentDidMount() {
    const { getUser } = this.props;
    this.props.getUser(this.props.match.params.login);
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
      public_gists,
      type,
    } = this.props.user;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{location}</h1>
        <h1>{bio}</h1>
      </div>
    );
  }
}

export default UserProfile;

UserProfile.propTypes = {
  getUser: PropTypes.func.isRequired,
  match: PropTypes.object,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
