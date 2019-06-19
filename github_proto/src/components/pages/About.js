import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  let a;
  return (
    <div className="container text-center">
      <h1 className="display-4">About this App</h1>
      <p>App to search Github Users!!!</p>
      <p>version 1.0.0</p>
      <Link to="/" className="btn btn-lg btn-primary">
        to users
      </Link>
    </div>
  );
};

export default About;
