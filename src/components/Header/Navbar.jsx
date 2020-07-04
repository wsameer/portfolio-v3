import React from 'react';
import logo from 'assets/icons/sameer-logo.png';
import { Container } from 'components/common';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Hamburger from './Hamburger';
import NavbarLinks from './NavbarLinks';

const NavbarWrapper = styled.div`
  padding: 0.6rem 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #2d3031;
  z-index: 4;

  img {
    position: static;
    margin-left: 0.5rem;
    height: 32px;
    margin-bottom: 0;
  }

  /* desktop */
  @media only screen and (min-width: 992px) {
    width: 100% !important;
    img {
      margin-left: 1.5rem;
    }
  }
`;

const Navbar = ({ sidebar, toggleSidebar }) => (
  <NavbarWrapper sidebar as={Container}>
    <AnchorLink offset="50" href="#intro">
      <img src={logo} alt="" />
    </AnchorLink>
    <NavbarLinks desktop />
    <Hamburger sidebar={sidebar} toggleSidebar={toggleSidebar} />
  </NavbarWrapper>
);

export default Navbar;
