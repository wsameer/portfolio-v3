import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import NavbarCollapse from './NavbarCollapse';

const StyledHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  margin-right: auto;
  margin-left: auto;

  min-height: 50px;
  margin-bottom: 20px;
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <StyledHeaderWrapper>
      <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <NavbarCollapse sidebar={sidebar} toggleSidebar={toggleSidebar} />
    </StyledHeaderWrapper>
  );
};
