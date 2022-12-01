import { useState } from 'react';
import './calculator.css';
import Button from '../button/Button';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [results, setResults] = useState({ total: null, next: null, operation: null });
  const handleClick = (event) => {
    const data = calculate(results, event.target.innerHTML);
    setResults({
      total: data.total,
      next: data.next,
      operation: data.operation,
    });
  };
  return (
    <>
      <div className="result-screen">
        <span id="total">{results.total}</span>
        <span id="operation">{results.operation}</span>
        <span id="next">{results.next}</span>
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
};

export default Calculator;
