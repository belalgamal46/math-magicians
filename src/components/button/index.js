import './button.css';
import PropTypes from 'prop-types';

const Button = ({ text, handleClick }) => {
  const grid = text === '0' ? 'grid-1-to-3' : '';
  const thirdChildBackground = text === '=' ? 'back-ground-color-orange' : '';

  return (
    <button type="button" className={`btn ${grid} ${thirdChildBackground}`} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
