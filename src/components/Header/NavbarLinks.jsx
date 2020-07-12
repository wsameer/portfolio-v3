import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const NavbarLinksWrapper = styled.div`
  a {
    color: #ddd;
    text-decoration: none;
    font-size: 14px;
    padding-left: 15px;
  }

  a:hover {
    color: #fff;
  }

  /* desktop */
  @media only screen and (min-width: 992px) {
    letter-spacing: 0.05rem;
    line-height: 2.2rem;

    a {
      font-size: 14px;
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
        @media (max-width: 960px) {
          display: none;
        }

        a {
          margin-right: 1rem;

          &:last-child {
            margin-right: unset;
          }
        }
		  `
      : `
        padding: 0 1.2rem;
        display: flex;
        flex-direction: column;

        a {
          margin-bottom: 0.5rem;
          padding: 0.5rem 1rem;
          padding-right: 0;
          padding-left: 6px;

          &:last-child {
            margin-bottom: 1.2rem;
          }

          @media only screen and (min-width: 992px) {
            padding: 1rem;
          }
        }
    `}
`;

const NavbarLinks = ({ desktop, toggleSidebar }) => {
  const onNavItemClick = () => (toggleSidebar ? toggleSidebar() : false);

  return (
    <NavbarLinksWrapper desktop={desktop}>
      <AnchorLink offset="50" href="#about" onClick={onNavItemClick}>
        About
      </AnchorLink>
      <AnchorLink offset="50" href="#experience" onClick={onNavItemClick}>
        Experience
      </AnchorLink>
      <AnchorLink offset="50" href="#work" onClick={onNavItemClick}>
        Work
      </AnchorLink>
      <AnchorLink offset="50" href="#contact" onClick={onNavItemClick}>
        Contact
      </AnchorLink>
    </NavbarLinksWrapper>
  );
};

export default NavbarLinks;
