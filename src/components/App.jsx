import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Statistics } from './Statistics';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const handleClick = option => {
    set{option[0].toUpperCase() + option.slice(1)}(prevState => prevState + 1);
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const result = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(result, 3);
  };
  render() {
    return (
      <div>
        <h1>Please leave your feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          // export funkcji
          onLeaveFeedback={this.handleClick}
        />
        <h2>Statistics</h2>
        <Notification
          message="There is no feedback"
          feedbackGiven={
            this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0
          }
        >
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Notification>
      </div>
    );
  }
}
