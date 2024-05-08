import '../index.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="list">
      {options.map(option => {
        return (
          <li>
            <button
              className="button"
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
