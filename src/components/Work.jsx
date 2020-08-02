import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'styles';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import styled from 'styled-components';

const WorksSection = styled.div`
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

const WorksWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
  }
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  padding: 1rem 0;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;

export const Work = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 10, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <WorksSection id="work">
      <WorksWrapper as={Container}>
        <PageTitle>Work</PageTitle>
        <Grid>
          {edges.map(({ node }) => (
            <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
              <Card>
                <Content>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </Content>
                <Stats>
                  <div>
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
              </Card>
            </Item>
          ))}
        </Grid>
      </WorksWrapper>
    </WorksSection>
  );
};
