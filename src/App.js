import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
