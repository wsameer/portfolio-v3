import React from 'react';
import styled from 'styled-components';

import { TimelineContent } from './TimelineContent';

const StyledTimeLineWrapper = styled.div`
  position: relative;
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 30px;
  border-radius: 20px;
  background-color: #2d3031;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  /* desktop */
  @media only screen and (min-width: 992px) {
    margin-bottom: 0px;
  }
`;

const StyledTimeLineContainer = styled.div`
  padding-left: 50px;
  margin-bottom: 30px;
  position: relative;
  background-color: transparent;
  width: 90%;

  &:after {
    content: ${({ metaData }) => (metaData === 'education' ? "'\f19d'" : "'\f0f2'")};
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    background: #2d3031;
    font-size: 20px;
    color: #fe5029;
    position: absolute;
    padding: 2px 0;
    left: ${({ metaData }) => (metaData === 'education' ? '-8px' : '-6px')};
    top: 0;
    z-index: 1;
  }
`;

const StyledVerticalLine = styled.span`
  position: absolute;
  width: 1px;
  background-color: #ff4c60;
  top: 30px;
  bottom: 30px;
  left: 34px;
`;

export const TimeLine = ({ data, metaData }) => (
  <StyledTimeLineWrapper>
    {data.map((d, i) => (
      <StyledTimeLineContainer key={i} metaData={metaData}>
        <TimelineContent data={d} />
      </StyledTimeLineContainer>
    ))}
    <StyledVerticalLine />
  </StyledTimeLineWrapper>
);
