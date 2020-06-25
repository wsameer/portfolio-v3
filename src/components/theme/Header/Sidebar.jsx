import React from 'react';
import NavbarLinks from './NavbarLinks';
import { SidebarWrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => (
  <SidebarWrapper active={sidebar}>
    <NavbarLinks />
  </SidebarWrapper>
);

export default Sidebar;
