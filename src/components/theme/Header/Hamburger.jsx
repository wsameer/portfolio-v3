import React from 'react';
import { HamburgerWrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => (
  <HamburgerWrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </HamburgerWrapper>
);

export default Hamburger;
