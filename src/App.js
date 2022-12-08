import { Route, Routes } from 'react-router-dom';
import './app.css';
import { CalculatorPage, HomePage, QuotePage } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<QuotePage />} />
      </Route>
    </Routes>
  );
}

export default App;
