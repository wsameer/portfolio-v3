import React from 'react';
import { Container, Row, Column } from 'components/common';
import dev from 'assets/illustrations/sameer-waskar.png';
import { Wrapper, AboutWrapper, Details, Thumbnail, PageTitle } from './styles';

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <PageTitle>About Me</PageTitle>
      <Row>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details>
          <p>Hello! I am Sameer, a Senior Software Engineer based in Pune, India.</p>
          <p>
            I am a JavaScript ninja, offering 5+ years of experience in developing things that dwell on the internet. Be
            it a static or a dynamic web application, custom component/plugin, responsive website, or anything in
            between, I have got it all covered.
          </p>
          <p>
            My aim is to deliver pixel perfect user interfaces built on top of modern JavaScript based frameworks
            ensuring responsiveness and cross-browser support.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <Row>
            <Column>
              <ul style={{ fontSize: '16px', color: '#ccc' }}>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>AngularJS & Angular</li>
              </ul>
            </Column>
            <Column>
              <ul style={{ fontSize: '16px', color: '#ccc' }}>
                <li>HTML5 & (S)Css</li>
                <li>Node.js</li>
                <li>ngrx/Redux</li>
              </ul>
            </Column>
          </Row>
        </Details>
      </Row>
    </AboutWrapper>
  </Wrapper>
);
