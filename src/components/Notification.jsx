export const Notification = ({ feedbackGiven, message, children }) => {
  return <div>{feedbackGiven ? children : <p>{message}</p>}</div>;
};
