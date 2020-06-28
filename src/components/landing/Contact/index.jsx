import React from 'react';
import { Container, Row, Col } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { ContactWrapper, Details, Thumbnail, PageTitle } from './styles';
import ContactForm from './ContactForm';

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
