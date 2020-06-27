import React from 'react';
import { Container, Row, Col } from 'components/common';
import dev from 'assets/illustrations/sameer-waskar.png';
import { Wrapper, AboutWrapper, Details, Thumbnail, PageTitle, UnorderedList } from './styles';

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <PageTitle>About me</PageTitle>
      <Row>
        <Col xs={12} sm={4} md={4}>
          <Thumbnail>
            <img src={dev} alt="I’m Sameer and I’m a full-stack engineer!" />
          </Thumbnail>
        </Col>
        <Col xs={12} sm={8} md={8}>
          <Details>
            <p>Hello! I am Sameer, a Senior Software Engineer based in Pune, India.</p>
            <p>
              I am a JavaScript ninja, offering 5+ years of experience in developing things that dwell on the internet.
              Be it a static or a dynamic web application, custom component/plugin, responsive website, or anything in
              between, I have got it all covered.
            </p>
            <p>
              My aim is to deliver pixel perfect user interfaces built on top of modern JavaScript based frameworks
              ensuring responsiveness and cross-browser support.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <Row>
              <Col xs="6">
                <UnorderedList>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>AngularJS & Angular</li>
                </UnorderedList>
              </Col>
              <Col xs="6">
                <UnorderedList>
                  <li>HTML5 & (S)CSS</li>
                  <li>Node.js</li>
                  <li>ngrx/Redux</li>
                </UnorderedList>
              </Col>
            </Row>
          </Details>
        </Col>
      </Row>
    </AboutWrapper>
  </Wrapper>
);
