import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  position: relative;
`;

const StyledTime = styled.span`
  color: #8b88b1;
  font-size: 14px;
`;

const StyledEmployer = styled.h3`
  color: #f4eeeb;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const StyledJobTitle = styled.p`
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 18px;
  color: #f4eeeb;
`;

export const TimelineContent = ({ data }) => (
  <StyledContent>
    <StyledTime>{data.timeline}</StyledTime>
    <StyledEmployer>{data.title}</StyledEmployer>
    <StyledJobTitle>{data.subTitle}</StyledJobTitle>
  </StyledContent>
);
