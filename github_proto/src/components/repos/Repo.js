import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => (
  <div className="card repos-card ">
    <h3>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
    </h3>
  </div>
);

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default Repo;
