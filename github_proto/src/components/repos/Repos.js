import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

const Repos = ({ repos }) => (
  <div className="text-center">
    {repos.map(repo => (
      <Repo key={repo.id} repo={repo} />
    ))}
  </div>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
