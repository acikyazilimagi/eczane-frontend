import PropTypes from "prop-types"; // ES6

export const Spacer = ({ size }) => <div style={{ minHeight: size }} />;

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
};
