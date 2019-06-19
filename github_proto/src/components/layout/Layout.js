import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Footer from './Footer';
import './css.css';

const Layout = ({ children }) => (
  <>
    <Navigation />
    <div className="main">{children}</div>
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
