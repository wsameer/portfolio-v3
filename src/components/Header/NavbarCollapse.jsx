import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';

const NavbarCollapseWrapper = styled.div`
  background-color: #2d3031;
  z-index: 4;
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? '1' : '0')};
  max-height: ${({ sidebarOpen }) => (sidebarOpen ? '100%' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-out;

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
