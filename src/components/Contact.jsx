import React from 'react';
import contact from 'assets/illustrations/contact.svg';
import styled from 'styled-components';
import { Container, Row, Col } from 'styles';
import { ContactForm } from './ContactForm';

const ContactWrapper = styled.div`
  padding: 4rem 0;
  display: block;
  justify-content: space-between;

  @media (max-width: 960px) {
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
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

const Thumbnail = styled.div`
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Contact = () => (
  <ContactWrapper as={Container} id="contact">
    <PageTitle>Let's Build Something Together</PageTitle>
    <Row>
      <Col sm={6}>
        <Details>
          <ContactForm />
        </Details>
      </Col>
      <Col sm={6}>
        <Thumbnail>
          <img src={contact} alt="I’m Sameer and I’m a Full stack engineer!" />
        </Thumbnail>
      </Col>
    </Row>
  </ContactWrapper>
);
