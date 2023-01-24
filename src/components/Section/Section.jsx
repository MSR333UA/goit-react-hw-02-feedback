import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Title>{title}</Title>
      {children}
    </SectionBox>
  );
};

SectionBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};
