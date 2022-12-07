import React from 'react';
import Calculator from '../../components/calculator/Calculator';
import './calculatorPage.css';

const CalculatorPage = () => (
  <main>
    <section className="calculator-section">
      <h1>Let&apos;s do some math</h1>
      <div className="calculator">
        <Calculator />
      </div>
    </section>
  </main>
);

export default CalculatorPage;
