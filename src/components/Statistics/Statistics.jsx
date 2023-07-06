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
      <ul>
        <h1>{title}</h1>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total()}</p>
        <p>Positive feedback: {positivePercentage()} %</p>
      </ul>
    </div>
  );
};
