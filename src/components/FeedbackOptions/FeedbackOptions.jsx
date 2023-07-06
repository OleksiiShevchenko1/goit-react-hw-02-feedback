import React from 'react';

export const FeedbackOptions = ({ options, OnLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            type="button"
            onClick={() => OnLeaveFeedback(option)}
            key={index}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
