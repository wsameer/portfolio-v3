import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: block;
  align-items: center;
  justify-content: space-between;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
  }
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

export const Details = styled.div`
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

export const Thumbnail = styled.div`
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

export const UnorderedList = styled.ul`
  font-size: 14px;
  color: #ccc;

  /* desktop */
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
`;
