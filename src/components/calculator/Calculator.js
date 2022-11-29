import { PureComponent } from 'react';
import './calculator.css';
import Button from '../button/Button';

class Calculator extends PureComponent {
  render() {
    return (
      <>
        <div className="number-holder">0</div>
        <div className="buttons-grid-container">
          <div className="buttons-container">
            <Button text="AC" />
            <Button text="+/-" />
            <Button text="%" />
            <Button text="÷" />
          </div>
          <div className="buttons-container">
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="x" />
          </div>
          <div className="buttons-container">
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="-" />
          </div>
          <div className="buttons-container">
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="+" />
          </div>
          <div className="buttons-container">
            <Button text="0" />
            <Button text="." />
            <Button text="=" />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
