import React from 'react';
import { Link } from 'gatsby';
import logo from 'assets/icons/sameer-logo.png';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <img src={logo} alt="" />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
