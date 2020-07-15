import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0;
  opacity: ${({ open }) => (open ? '1' : '0')};
  max-height: ${({ open }) => (open ? '100%' : '0')};
  overflow: hidden;
  padding: ${({ open }) => (open ? '15px' : '0 15px')};
  transition: all 0.3s;
`;

const ListItems = styled.li`
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  border: none;
  letter-spacing: normal;
`;

export const Accordion = ({ points, open }) => (
  <StyledContent open={open}>
    {points.map((point, i) => (
      <ListItems key={i}>{point}</ListItems>
    ))}
  </StyledContent>
);
