import { Route, Routes } from 'react-router-dom';
import './app.css';
import { CalculatorPage, HomePage, QuotePage } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </>
  );
}

export default App;
