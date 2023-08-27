import { FeedbackContainer, Button } from "./FeedbackOptions_styled";
import PropTypes from 'prop-types';


export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
      <FeedbackContainer>
        {options.map(option => (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </FeedbackContainer>
    );
}


Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};