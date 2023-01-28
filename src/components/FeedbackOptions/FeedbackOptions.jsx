import PropTypes from 'prop-types';

import { BtnList, BtnFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ state, onLeaveFeedback }) => {
  return (
    <BtnList>
      {state.map(name => {
        return (
          <li key={name}>
            <BtnFeedback type="button" onClick={() => onLeaveFeedback(name)}>
              {name}
            </BtnFeedback>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  state: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
