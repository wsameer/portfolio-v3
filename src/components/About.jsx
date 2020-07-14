import React from 'react';
import { Container, Row, Col } from 'styles';
import dev from 'assets/illustrations/sameer-waskar.png';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: block;
  align-items: center;
  justify-content: space-between;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const Details = styled.div`
  padding: 1rem;
  border-radius: 20px;

  -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  p {
    margin-bottom: 1rem;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    color: #e0e0e0;
  }

  /* desktop */
  @media only screen and (min-width: 992px) {
    padding: 2rem;

    p {
      font-size: 16px;
    }
  }
`;

const Thumbnail = styled.div`
  text-align: center;

  img {
    background-color: #333739;
    margin: 10px;
    margin-bottom: 40px;
    border-radius: 50%;
    float: center;
    height: 180px;
    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 2rem;

    img {
      height: 250px;
      float: left;
      margin-bottom: 0;
    }
  }
`;

const UnorderedList = styled.ul`
  font-size: 14px;
  color: #ccc;

  /* desktop */
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
`;

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
