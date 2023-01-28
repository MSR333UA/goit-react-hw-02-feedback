import PropTypes from 'prop-types';
import { TextNotify } from './Notification.styled';

export const Notify = ({ message }) => <TextNotify>{message}</TextNotify>;
Notify.propTypes = {
  message: PropTypes.string.isRequired,
};
