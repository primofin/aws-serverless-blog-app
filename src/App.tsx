import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/slices/authSlice';
import { AppDispatch } from './redux/store';
import AppRouter from './Routes';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
