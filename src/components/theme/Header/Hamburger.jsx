import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  z-index: 5;
  top: 1.2rem;
  right: 1.8rem;
  display: block;

  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  /* desktop */
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const Bar = styled.div`
	width: 1.6rem;
	height: .15rem;
	margin-bottom: .3rem;
	background-color: #eee;
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;

	@media (max-width: 600px){
		width: 1.6rem;
	}

	${({ top, sidebar }) => top && sidebar && `transform: translateY(8px) rotate(-135deg);`}

	${({ mid, sidebar }) => mid && sidebar && `transform: scale(0);`}

	${({ bottom, sidebar }) => bottom && sidebar && `transform: translateY(-6px) rotate(-45deg);	`}
`;

const Hamburger = ({ sidebar, toggleSidebar }) => (
  <HamburgerWrapper sidebar={sidebar} onClick={() => toggleSidebar()}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </HamburgerWrapper>
);

export default Hamburger;
