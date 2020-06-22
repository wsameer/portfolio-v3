import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: block;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  flex: 1;
  margin-bottom: 3rem;
`;

export const Details = styled.div`
  flex: 1;
  padding: 2rem 0;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  p {
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.3;
    color: #ccc;
  }
`;

export const Thumbnail = styled.div`
  flex: 0.5;

  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }

  img {
    background-color: #333739;
    margin: 20px;
    border-radius: 50%;
    height: 280px;
    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
