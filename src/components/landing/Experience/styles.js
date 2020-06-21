import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ExperienceWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
