import React from 'react';
import { StyledSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <h1>{title}</h1>
      {children}
    </StyledSection>
  );
};
