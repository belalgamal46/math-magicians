import { Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Home/Home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
}

export default App;
