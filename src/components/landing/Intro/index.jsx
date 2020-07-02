import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import { SocialIcons } from '../../../config';
import { IntroSection, IntroWrapper, LineElement, Details, ListLine, ListLineItems, HorizLine } from './styles';

console.log(SocialIcons);

const Links = SocialIcons.map((item, index) => (
  <ListLineItems key={index}>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <img src={item.icon} alt=""></img>
    </a>
  </ListLineItems>
));

export const Intro = () => (
  <IntroSection id="intro">
    <IntroWrapper as={Container}>
      <LineElement>
        <ListLine>
          <ListLineItems>
            <HorizLine />
          </ListLineItems>
          {Links}
        </ListLine>
        <Details>
          <h3>Hi there, I'm</h3>
          <h1>Sameer Waskar.</h1>
          <p>I'm a Full Stack Engineer based in Pune, India.</p>
          <Button as={AnchorLink} href="#contact">
            Get in touch
          </Button>
        </Details>
      </LineElement>
    </IntroWrapper>
  </IntroSection>
);
