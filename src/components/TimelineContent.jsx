import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './Accordion';

const StyledContent = styled.div`
  position: relative;
`;

const StyledTime = styled.span`
  color: #8b88b1;
  font-size: 14px;
`;

const StyledEmployer = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #f4eeeb;

  /* desktop */
  @media only screen and (min-width: 992px) {
    font-size: 20px;
  }
`;

const StyledJobTitle = styled.p`
  font-weight: 400;
  margin-bottom: 30px;
  font-size: 14px;

  /* desktop */
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
`;

const StyledReadMore = styled.a`
  font-size: 12px;
  display: flex;
  margin-top: -45px;
  flex-direction: row-reverse;
  opacity: 0.7;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledLink = styled.a`
  color: #f4eeeb;
  &:hover {
    text-decoration: underline;
  }
`;

export const TimelineContent = ({ data }) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => setOpen(!open);
  const { timeline, title, subTitle, url, major, responsibilites } = data;

  return (
    <StyledContent>
      <StyledTime>{timeline}</StyledTime>
      <StyledEmployer>
        <StyledLink href={url} target="_blank" rel="noreferrer">
          {title}
        </StyledLink>
      </StyledEmployer>
      <StyledJobTitle>{subTitle}</StyledJobTitle>
      {responsibilites && (
        <>
          <StyledReadMore onClick={toggleAccordion}>{open ? 'Show less' : 'Show more'}</StyledReadMore>
          <Accordion points={responsibilites} open={open} />
        </>
      )}

      {major && <StyledJobTitle>{major}</StyledJobTitle>}
    </StyledContent>
  );
};
