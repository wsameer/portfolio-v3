import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavbarLinksWrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <NavbarLinksWrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#experience">Experience</AnchorLink>
    <AnchorLink href="#work">Work</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </NavbarLinksWrapper>
);

export default NavbarLinks;
