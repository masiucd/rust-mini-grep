import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../../links';

function Navigation({ title, title2 }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(collapsed => !collapsed);
  };
  return (
    <nav className="nav">
      <h4> {title}</h4>
      <h4 style={{ color: '#fff' }}>{title2}</h4>
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
  title2: 'React App',
};

export default Navigation;
