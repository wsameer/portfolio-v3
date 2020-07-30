import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'styles';
import styled from 'styled-components';
import { SocialIcons } from '../config';

const StyledHeroSection = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 1rem;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const StyledHeroWrapper = styled.div`
  padding: 30% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 3rem 0;
    margin-top: 40px;
  }
`;

const StyledDetails = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    padding-left: 50px;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
    color: #f4eeeb;
    margin-bottom: 15px;
    padding: 0;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  h1 {
    font-size: 2.5rem;
    color: #f4eeeb;
    font-weight: 400;
    letter-spacing: 0.1rem;
    margin-bottom: 15px;
    padding: 0;

    @media (min-width: 768px) {
      font-size: 7rem;
    }
  }

  p {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: justify;
    line-height: 30px;
    margin-bottom: 50px;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const StyledLineElement = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='220px' height='220px' viewBox='0 0 220 220' enable-background='new 0 0 220 220' xml:space='preserve'%3E%3Cimage id='image0' width='220' height='220' x='0' y='0' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAQAAACxUwcKAAAC5mlDQ1BpY2MAACiRY2BgnuDo4uTK%0AJMDAUFBUUuQe5BgZERmlwH6egY2BmQEMEpOLCxwDAnxA7Lz8vFQGVMDIwPDtGohkYLisCzKLgTTA%0Amgy0GEgfAGKjlNTiZCD9BYjTy0sKgOKMMUC2SFI2mF0AYmeHBDkD2S0MDEw8JakVIL0MzvkFlUWZ%0A6RklCoaWlpYKjin5SakKwZXFJam5xQqeecn5RQX5RYklqSlAtVA7QIDXJb9EwT0xM0/ByECVRHcT%0ABKBwhLAQ4YMQQ4Dk0qIyCAusSIBBgcGAwYEhgCGRoZ5hAcNRhjeM4owujKWMKxjvMYkxBTFNYLrA%0ALMwcybyQ+Q2LJUsHyy1WPdZW1ntslmzT2L6xh7Pv5lDi6OL4wpnIeYHLkWsLtyb3Ah4pnqm8QryT%0A+IT5pvHL8C8W0BHYIegqeEUoVeiHcK+Iishe0XDRL2KTxI3Er0hUSMpJHpPKl5aWPiFTJqsue0uu%0AT95F/o/CVsVCJT2lt8prVQpUTVR/qh1U79II1VTS/KB1QHuSTqqulZ6g3iv9IwYLDGuNYoxtTeRN%0AmU1fml0w32mxxHKCVZ11rk2cbaCdq721g7GjjpOas5KLgqu8m4K7soe6p66XibeNj7tvsF+Cf35A%0AfeDEoKXBu0Iuhr4MZ4qQi7SKioiuiJkZuyfuQQJbom5SWHJDyprUm+kcGRaZmVlzsy/msufZ51cU%0AbCp8V6xdklW6quxNhX5lSdWuGsZar7qp9Q8b9Zpqms+2yrUVth/tlO4q6j7dq9rX2H93os2k2ZP/%0ATo2fdniGxsz+Wd/nJMw9Pd98wdJFIotbl3xblrn83sqQVafXuKzdt95yw7ZNJpu3bDXZtn2H1c79%0Au133nN0Xtv/BwZxDP4+0HxM/vuKk9alzZ5LP/jo/6aL2paNXEq/+uz7nps2tu3fq7ynfP/Ew77HY%0Ak/3PMl+IvDz4Ov+t/LsLH5o+mX5+9XXB9/CfAr9O/Wn95/j/PwANAA80f6jFjQAAACBjSFJNAAB6%0AJQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAA%0ADPsAAAz7AazCVBgAAAAHdElNRQfkBQ0HGA9sYDfUAAAOZklEQVR42u2daVMbyZaGn1OLEBiBARsw%0A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' /%3E%3C/svg%3E");
  background-size: 150px;
  padding-top: 1px;
  background-position: 0px 0px;
  background-repeat: no-repeat;

  @media (min-width: 992px) {
    margin-left: -10px;
    background-size: 180px;
    padding-top: 20px;
  }
`;

const StyledListLine = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 1.5rem 0;
  padding-top: 10px;
`;

const StyledListLineItems = styled.li`
  display: inline-block;
  margin-right: 1rem;

  &:nth-child(1) {
    margin-right: 5px;
    margin-bottom: 10px;
  }

  img {
    height: 22px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    margin-right: 1.2rem;

    &:nth-child(1) {
      margin-right: 15px;
    }

    img {
      height: 26px;
    }
  }
`;

const StyledHorizLine = styled.div`
  height: 2px;
  background-color: grey;
  width: 130px;
  margin: 7px;
  margin-right: 20px;

  @media (min-width: 768px) {
    width: 200px;
    margin: 7px;
    margin-right: 25px;
  }
`;

const Links = SocialIcons.map((item, index) => (
  <StyledListLineItems key={index}>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <img src={item.icon} alt=""></img>
    </a>
  </StyledListLineItems>
));

export const Hero = ({ data }) => {
  const { frontmatter } = data[0].node;

  return (
    <StyledHeroSection id="hero">
      <StyledHeroWrapper as={Container}>
        <StyledLineElement>
          <StyledListLine>
            <StyledListLineItems>
              <StyledHorizLine />
            </StyledListLineItems>
            {Links}
          </StyledListLine>
          <StyledDetails>
            <h3>{frontmatter.greeting}</h3>
            <h1>{frontmatter.name}</h1>
            <p>{frontmatter.subtitle}</p>
            <Button as={AnchorLink} href="#contact">
              {frontmatter.buttonText}
            </Button>
          </StyledDetails>
        </StyledLineElement>
      </StyledHeroWrapper>
    </StyledHeroSection>
  );
};
