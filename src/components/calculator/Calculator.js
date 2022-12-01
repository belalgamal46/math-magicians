import { PureComponent } from 'react';
import './calculator.css';
import Button from '../button/Button';
import calculate from '../../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const { total, next, operation } = this.state;

    const handleClick = (event) => {
      const results = calculate({ total, next, operation }, event.target.innerHTML);

      this.setState({
        total: results.total,
        next: results.next,
        operation: results.operation,
      });
    };

    return (
      <>
        <div className="result-screen">
          <span id="total">{total}</span>
          <span id="operation">{operation}</span>
          <span id="next">{next}</span>
        </div>
        <div className="buttons-grid-container">
          <div className="buttons-container">
            <Button text="AC" handleClick={handleClick} />
            <Button text="+/-" handleClick={handleClick} />
            <Button text="%" handleClick={handleClick} />
            <Button text="÷" handleClick={handleClick} />
          </div>
          <div className="buttons-container">
            <Button text="7" handleClick={handleClick} />
            <Button text="9" handleClick={handleClick} />
            <Button text="8" handleClick={handleClick} />
            <Button text="x" handleClick={handleClick} />
          </div>
          <div className="buttons-container">
            <Button text="4" handleClick={handleClick} />
            <Button text="5" handleClick={handleClick} />
            <Button text="6" handleClick={handleClick} />
            <Button text="-" handleClick={handleClick} />
          </div>
          <div className="buttons-container">
            <Button text="1" handleClick={handleClick} />
            <Button text="2" handleClick={handleClick} />
            <Button text="3" handleClick={handleClick} />
            <Button text="+" handleClick={handleClick} />
          </div>
          <div className="buttons-container">
            <Button text="0" handleClick={handleClick} />
            <Button text="." handleClick={handleClick} />
            <Button text="=" handleClick={handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
