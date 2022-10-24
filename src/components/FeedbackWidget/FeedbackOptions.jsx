import PropTypes from 'prop-types';

export default function FeedbackOptions({options,onLeaveFeedback}) {
  return (
    <div>
        {options.map(option => {
        return (
          <button type="button" key={option} onClick={() => {
              onLeaveFeedback(option);
            }}>
            {option}
          </button>
        );
      })}
      </div>
  )
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
