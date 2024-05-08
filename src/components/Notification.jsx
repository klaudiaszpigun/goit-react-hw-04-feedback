import { useEffect, useState } from 'react';
export const Notification = ({ feedbackGiven, children }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage("There's no feedback");
  }, []);

  return <div>{feedbackGiven ? children : <p>{message}</p>}</div>;
};
