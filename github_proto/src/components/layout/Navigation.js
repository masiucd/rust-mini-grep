import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../../links';

function Navigation({ title, icon }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(collapsed => !collapsed);
  };
  return (
    <nav className="nav bg-dark">
      <h4> {title}</h4>
      <i className={icon} />
      <ul className="nav-list">
        {links.map((link, inx) => (
          <Link key={inx} to={link.to}>
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  title: 'Github users',
  icon: 'fab fa-github',
};

export default Navigation;
