import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import TestingAPI from './pages/testingPages/APITesting';
import AuthenticationTesting from './pages/testingPages/AuthenticationTesting';
import Editor from './components/CustomEditor';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/authentication-test" element={<AuthenticationTesting />} />
    <Route path="/api-test" element={<TestingAPI />} />
    <Route path="/editor" element={<Editor />} />
  </Routes>
);
export default AppRouter;
