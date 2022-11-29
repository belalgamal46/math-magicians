import { PureComponent } from 'react';
import './app.css';
import Calculator from './components/Calculator';

class App extends PureComponent {
  render() {
    return (
      <div className="calculator-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
