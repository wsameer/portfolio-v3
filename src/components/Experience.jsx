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

const work = [
  {
    timeline: 'Apr 2017 - Aug 2020',
    title: 'Securly Softwares (India) Pvt Ltd., Pune',
    subTitle: 'Senior Software Engineer',
  },
  {
    timeline: 'May 2015 - Apr 2017',
    title: 'Vizitech Solutions Pvt. Ltd., Pune',
    subTitle: 'Programmer Analyst',
  },
];

const education = [
  {
    timeline: '2013-2015',
    title: 'Savitribai Phule Pune University',
    subTitle: 'Master of Science (M.Sc.)',
  },
  {
    timeline: '2010 - 2013',
    title: 'Savitribai Phule Pune University',
    subTitle: 'Bachelor of Science (B.Sc.)',
  },
];

export const Experience = () => (
  <ExperienceSection id="experience">
    <ExperienceWrapper as={Container}>
      <PageTitle>Experience & Education</PageTitle>
      <Row>
        <Col md={6} sm={12}>
          <TimeLine data={work} />
        </Col>
        <Col md={6} sm={12}>
          <TimeLine data={education} />
        </Col>
      </Row>
    </ExperienceWrapper>
  </ExperienceSection>
);
