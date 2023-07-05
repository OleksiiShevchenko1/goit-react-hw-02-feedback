import { Section } from './Section/Section';
import { React, Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Section/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackCount = 

  
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            OnLeaveFeedback={this.handleFeedbackCount}
          />
        </Section>

        <Statistics titlee="Statistics" />
      </div>
    );
  }
}
