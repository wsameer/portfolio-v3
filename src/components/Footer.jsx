import React from 'react';
import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';
import { Container } from 'styles';
import { SocialIcons } from '../config';

const StyledFooterWrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  color: #000;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

const StyledDetails = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;

export const Footer = () => (
  <StyledFooterWrapper>
    <StyledFlex as={Container}>
      <StyledDetails>
        <h2>Sameer Waskar</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="https://github.com/wsameer" rel="noopener noreferrer" target="_blank">
            Sameer
          </a>
        </span>
      </StyledDetails>
      <StyledLinks>
        {SocialIcons.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </StyledLinks>
    </StyledFlex>
  </StyledFooterWrapper>
);
