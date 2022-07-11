import { Routes, Route } from 'react-router-dom';

import TestingPage from './pages/TestingPage';
import About from './pages/About';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
