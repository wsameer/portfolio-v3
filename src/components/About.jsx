/* eslint-disable react/no-danger */
import React from 'react';
import { Container, Row, Col } from 'styles';
import dev from 'assets/illustrations/sameer-waskar.png';
import styled from 'styled-components';

const StyledWrapper = styled.div`
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

const StyledAboutWrapper = styled.div`
  padding: 4rem 0;
  display: block;
  align-items: center;
  justify-content: space-between;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const StyledPageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const StyledDetails = styled.div`
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

const StyledThumbnail = styled.div`
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
      height: 280px;
      float: left;
      margin-bottom: 0;
    }
  }
`;

const StyledUnorderedList = styled.ul`
  font-size: 14px;
  color: #ccc;

  /* desktop */
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
`;

export const About = () => {
  const pageTitle = 'About Me';
  const alt = 'I’m Sameer and I’m a full-stack engineer!';
  const skillsOne = ['JavaScript (ES6+)', 'React', 'AngularJS & Angular'];
  const skillsTwo = ['HTML & (S)CSS', 'JAM Stack', 'Node.js & PHP'];
  const one = `Hello! I am Sameer, a Senior Software Engineer based in Pune, India.`;
  const two = `I am a JavaScript ninja, offering 5+ years of experience in developing things that dwell on the
  internet. Be it a static or a dynamic web application, custom component/plugin, responsive website, or
  anything in between, I have got it all covered.`;
  const three = `My aim is to deliver pixel perfect user interfaces built on top of modern JavaScript based frameworks
  ensuring responsiveness and cross-browser support.`;
  const four = `Here are a few technologies I've been working with recently:`;

  const data = [one, two, three, four];

  return (
    <StyledWrapper id="about">
      <StyledAboutWrapper as={Container}>
        <StyledPageTitle>{pageTitle}</StyledPageTitle>
        <Row>
          <Col xs={12} sm={4} md={4}>
            <StyledThumbnail>
              <img src={dev} alt={alt} />
            </StyledThumbnail>
          </Col>
          <Col xs={12} sm={8} md={8}>
            <StyledDetails>
              <div>{data && data.map((d, i) => <p key={i}>{d}</p>)}</div>
              <Row>
                <Col xs="6">
                  <StyledUnorderedList>
                    {skillsOne && skillsOne.map((skill, i) => <li key={i}>{skill}</li>)}
                  </StyledUnorderedList>
                </Col>
                <Col xs="6">
                  <StyledUnorderedList>
                    {skillsTwo && skillsTwo.map((skill, i) => <li key={i}>{skill}</li>)}
                  </StyledUnorderedList>
                </Col>
              </Row>
            </StyledDetails>
          </Col>
        </Row>
      </StyledAboutWrapper>
    </StyledWrapper>
  );
};
