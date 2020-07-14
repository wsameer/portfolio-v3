import React from 'react';
import styled from 'styled-components';

import { TimelineContent } from './TimelineContent';

const StyledTimeLineWrapper = styled.div`
  position: relative;
  margin: 15px;
  padding: 30px;
  border-radius: 20px;
  background-color: #2d3031;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const StyledTimeLineContainer = styled.div`
  padding-left: 50px;
  margin-bottom: 50px;
  position: relative;
  background-color: transparent;
  width: 100%;

  &:after {
    content: 'f0f2';
    background: #2d3031;
    font-family: simple-line-icons;
    font-size: 24px;
    color: #ff4c60;
    position: absolute;
    left: -7px;
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

export const TimeLine = ({ data }) => (
  <StyledTimeLineWrapper>
    {data.map(d => (
      <StyledTimeLineContainer>
        <TimelineContent data={d} />
      </StyledTimeLineContainer>
    ))}
    <StyledVerticalLine />
  </StyledTimeLineWrapper>
);
