import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

function Navigation({ title, title2 }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(collapsed => !collapsed);
  };
  return (
    <div>
      <Navbar color="faded" light className="bg-dark">
        <NavbarBrand href="/" className="mr-auto  text-white">
          {title}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 text-white" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="text-white">
            <h4 style={{ color: '#fff' }}>{title2}</h4>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

Navigation.defaultProps = {
  title: 'Github users',
  title2: 'React App',
};

export default Navigation;
