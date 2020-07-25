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
    timeline: 'Aug 2020 - Present',
    title: 'Koru UX Design LLP',
    subTitle: 'Lead Front End Developer',
    responsibilies: [
      'Work with Design head and PM to plan and execute front-end projects, ensuring that the development team has the appropriate information to be successful.',
      'Solve complex technical problems and communicate the solution to non-technical management and peers. Responsible for ownership of the application code base which includes maintaining the integrity of the code, defining/enforcing standards and best practices, and performing and participating in code reviews.',
      'Adoption of lean methodologies where appropriate.',
      'Hire and retain best possible technical talent.',
    ],
  },
  {
    timeline: 'Apr 2017 - Aug 2020',
    title: 'Securly Softwares (India) Pvt Ltd., Pune',
    subTitle: 'Senior Software Engineer',
    responsibilies: [
      'Modernized the Securly Filtering products by migrating codebase from AngularJS to Angular 7 resulting in better runtime performance, modularity, security and smoother user experience.',
      'Worked collaboratively with cross-functional and overseas teams to deliver highly scalable and reusable components and expedited projects stuck in the backlog.',
      'Single-handedly implemented the front-end of Securly 24 product, and commended for playing a crucial role in helping the team set up and integrate the unit testing framework.',
      'Refactored the Securly Parents Portal’s code and made the user interface responsive using modern CSS frameworks resulting in a 90% better user experience for mobile users.',
      'Displayed quick and accurate debugging skills while tackling P0s and firefighting , which helped slash turnaround time of P0s by 30% and averted product release delays.',
    ],
  },
  {
    timeline: 'May 2015 - Apr 2017',
    title: 'Vizitech Solutions Pvt. Ltd., Pune',
    subTitle: 'Programmer Analyst',
    responsibilies: [
      'Managed all phases of web application projects for a wide range of clients requiring interactive, transactional e-commerce sites; client coordination and handling documentation, system design, and integration.',
      'Developed landing pages, dashboards and online applications using HTML5/CSS3, LAMP stack, and Node.js scripting.',
      'Programmed tools and web components to automate and visualize the client’s internal processes bolstering efficiency by 40%.',
      'Identified and developed scripts using the .NET framework to parse and extract relevant data from various formats of documents which alleviated the issues that emerged in the existing methods.',
      'Worked closely with clients to establish problem specifications and system designs.',
      'Designed and developed entire business and product websites for The Genius Parents.',
    ],
  },
];

const education = [
  {
    timeline: '2013-2015',
    title: 'Savitribai Phule Pune University',
    subTitle: 'Master of Science (M.Sc.)',
    major: 'Computer Science',
  },
  {
    timeline: '2010 - 2013',
    title: 'Savitribai Phule Pune University',
    subTitle: 'Bachelor of Science (B.Sc.)',
    major: 'Computer Science',
  },
];

export const Experience = ({ workData }) => {
  console.log(workData);

  const { frontmatter } = workData[0].node;

  console.log(frontmatter);

  return (
    <ExperienceSection id="experience">
      <ExperienceWrapper as={Container}>
        <PageTitle>Experience & Education</PageTitle>
        <Row>
          <Col md={6} sm={12}>
            <TimeLine data={frontmatter} metaData="experience" />
          </Col>
          <Col md={6} sm={12}>
            <TimeLine data={education} metaData="education" />
          </Col>
        </Row>
      </ExperienceWrapper>
    </ExperienceSection>
  );
};
