import React from 'react';
import logo from 'assets/icons/sameer-logo.png';
import { Container } from 'styles';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Hamburger from './Hamburger';
import NavbarLinks from './NavbarLinks';

const StyledNavbarWrapper = styled.div`
  padding: 0.6rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2d3031;
  z-index: 4;

  img {
    margin-left: 1.3rem;
    height: 32px;
    margin-bottom: 0;
  }

  /* desktop */
  @media only screen and (min-width: 992px) {
    width: 100% !important;
    img {
      margin-left: 1.5rem;
      vertical-align: middle;
    }
  }
`;

const Navbar = ({ sidebar, toggleSidebar }) => (
  <StyledNavbarWrapper sidebar as={Container}>
    <AnchorLink offset="50" href="#hero">
      <img src={logo} alt="" />
    </AnchorLink>
    <NavbarLinks desktop />
    <Hamburger sidebar={sidebar} toggleSidebar={toggleSidebar} />
  </StyledNavbarWrapper>
);

export default Navbar;
