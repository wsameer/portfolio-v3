import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import NavbarCollapse from './NavbarCollapse';

const HeaderWrapper = styled.div`
  top: 0;
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;

  min-height: 50px;
  margin-bottom: 20px;
  display: block;
`;

const NavContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <HeaderWrapper>
      <NavContainer>
        <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <NavbarCollapse sidebar={sidebar} toggleSidebar={toggleSidebar} />
      </NavContainer>
    </HeaderWrapper>
  );
};
