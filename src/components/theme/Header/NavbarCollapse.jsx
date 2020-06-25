import React from 'react';
import PropTypes from 'prop-types';
import NavbarLinks from './NavbarLinks';
import { NavbarCollapseWrapper } from './styles';

const NavbarCollapse = ({ sidebar, toggle }) => (
  <NavbarCollapseWrapper active={sidebar} onClick={toggle}>
    <NavbarLinks />
  </NavbarCollapseWrapper>
);

NavbarCollapse.propTypes = {};

export default NavbarCollapse;
