import React from 'react';
import { Container, Row, Col } from 'styles';
import styled from 'styled-components';
import { TimeLine } from './TimeLine';

const ExperienceSection = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 1rem;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const ExperienceWrapper = styled.div`
  padding: 4rem 0;
  display: block;
  align-items: center;
  justify-content: space-between;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
  }
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

export const Experience = ({ work, education }) => (
  <ExperienceSection id="experience">
    <ExperienceWrapper as={Container}>
      <PageTitle>Experience & Education</PageTitle>
      <Row>
        <Col md={6} sm={12}>
          <TimeLine data={work} metaData="experience" />
        </Col>
        <Col md={6} sm={12}>
          <TimeLine data={education} metaData="education" />
        </Col>
      </Row>
    </ExperienceWrapper>
  </ExperienceSection>
);
