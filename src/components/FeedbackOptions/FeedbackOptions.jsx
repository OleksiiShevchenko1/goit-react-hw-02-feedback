import React from 'react';
import { StyledItemButtons, StyledIButtons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, OnLeaveFeedback }) => {
  return (
    <StyledItemButtons>
      {options.map((option, index) => {
        return (
          <StyledIButtons
            type="button"
            onClick={() => OnLeaveFeedback(option)}
            key={index}
          >
            {option}
          </StyledIButtons>
        );
      })}
    </StyledItemButtons>
  );
};
