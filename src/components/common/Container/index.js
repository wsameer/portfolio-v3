import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;

export const Grid = styled.div`
  border: 1px solid red;
`;

export const Row = styled.div`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

function getWidthString(span) {
  if (!span) return;

  const width = (span / 12) * 100;
  return `width: ${width}%;`;
}

export const Col = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

  /* phone */
  @media only screen and (min-width: 576px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  /* tablet */
  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getWidthString(md)};
  }

  /* desktop */
  @media only screen and (min-width: 992px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }

  /* large desktop */
  @media only screen and (min-width: 1200px) {
    ${({ xl }) => xl && getWidthString(xl)};
  }
`;
