import React from 'react';
import { Link } from 'gatsby';
import logo from 'assets/icons/sameer-logo.png';
import { Container } from 'components/common';
import Hamburger from './Hamburger';
import NavbarLinks from './NavbarLinks';
import { NavbarWrapper } from './styles';

const Navbar = ({ sidebar, toggle }) => (
  <NavbarWrapper as={Container}>
    <Link to="/">
      <img src={logo} alt="" />
    </Link>
    <NavbarLinks desktop />
    <Hamburger sidebar={sidebar} toggle={toggle} />
  </NavbarWrapper>
);

export default Navbar;
