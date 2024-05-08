import { useState } from 'react';
import '../index.css';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Statistics } from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    option === 'good'
      ? setGood(prevState => prevState + 1)
      : option === 'neutral'
      ? setNeutral(prevState => prevState + 1)
      : option === 'bad' && setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = (good * 100) / countTotalFeedback();
    return Math.round(result, 3);
  };

  return (
    <div className="div">
      <div className="container">
        <h1>Please leave your feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          // export funkcji
          onLeaveFeedback={handleClick}
        />
        <h2 className="second-heading">Statistics</h2>
        <Notification feedbackGiven={good > 0 || neutral > 0 || bad > 0}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Notification>
      </div>
    </div>
  );
};
