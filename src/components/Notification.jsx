import { useEffect, useState } from 'react';
import '../index.css';
export const Notification = ({ feedbackGiven, children }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage("There's no feedback");
  }, []);

  return (
    <div className="div">{feedbackGiven ? children : <p>{message}</p>}</div>
  );
};
