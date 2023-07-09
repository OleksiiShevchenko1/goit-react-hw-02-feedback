import React from 'react';
import { StyledScoreResults } from './Statistics.styled';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StyledScoreResults>
        <h1>{title}</h1>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total()}</p>
        <p>Positive feedback: {positivePercentage()} %</p>
      </StyledScoreResults>
    </div>
  );
};
