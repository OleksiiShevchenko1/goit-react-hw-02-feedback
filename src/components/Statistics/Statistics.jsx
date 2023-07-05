import React from 'react';
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
      <h1>{title}</h1>
      <p>Good:</p>
      <p>Neutral:</p>
      <p>Bad:</p>
      <p>Total:</p>
      <p>Positive feedback: %</p>
    </div>
  );
};
