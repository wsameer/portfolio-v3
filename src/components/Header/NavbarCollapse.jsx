import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';

const NavbarCollapseWrapper = styled.div`
  transition: height 0.35s ease;
  background-color: #2d3031;
  z-index: 4;
  overflow-y: auto;

  ${({ sidebarOpen }) => (sidebarOpen ? `display: block;` : `display: none;`)}

  @media only screen and(min-width: 992px) {
    display: none;
  }
`;

const NavbarCollapse = ({ sidebar, toggleSidebar }) => (
  <NavbarCollapseWrapper sidebarOpen={sidebar} onClick={toggleSidebar}>
    <NavbarLinks toggleSidebar={toggleSidebar} />
  </NavbarCollapseWrapper>
);

NavbarCollapse.propTypes = {};

export default NavbarCollapse;
