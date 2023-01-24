import PropTypes from 'prop-types';

import { BtnList, BtnFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
