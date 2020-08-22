import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'styles';

const StyledContactWrapper = styled.div`
  padding: 4rem 0;
  display: block;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const StyledPageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const StyledMessage = styled.p`
  font-size: 1.15rem;
  font-weight: 400;
  text-align: justify;
  line-height: 30px;
  color: #6c757d;
  margin: 3rem 0;
`;

const StyledMailTo = styled(Button)`
  background-color: transparent;
  color: #f4eeeb;
  border: 1px solid #fe5029;

  :hover {
    background-color: #fe5029;
    color: #f4eeeb;
    border-color: #fe5029;
  }
`;

export const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { pageTitle, buttonText, buttonHref } = frontmatter;
  return (
    <StyledContactWrapper as={Container} id="contact">
      <StyledPageTitle>{pageTitle}</StyledPageTitle>
      <Row>
        <Col sm={6}>
          <StyledMessage dangerouslySetInnerHTML={{ __html: html }} />
          <StyledMailTo href={buttonHref}>{buttonText}</StyledMailTo>
        </Col>
      </Row>
    </StyledContactWrapper>
  );
};
