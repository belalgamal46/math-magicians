import { PureComponent } from 'react';
import './button.css';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { text } = this.props;
    const grid = text === '0' ? 'grid-1-to-3' : '';
    const thirdChildBackground = text === '=' ? 'back-ground-color-orange' : '';
    return (
      <button type="button" className={`btn ${grid} ${thirdChildBackground}`}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
