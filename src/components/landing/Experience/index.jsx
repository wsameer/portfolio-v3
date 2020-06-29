import React from 'react';
import { Container } from 'components/common';
import { ExperienceSection, ExperienceWrapper, PageTitle } from './styles';

export const Experience = () => (
  <ExperienceSection id="experience">
    <ExperienceWrapper as={Container}>
      <PageTitle>Experience & Education</PageTitle>
    </ExperienceWrapper>
  </ExperienceSection>
);
