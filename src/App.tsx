import { API, graphqlOperation } from 'aws-amplify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from './graphql/mutations';
import { getCurrentUser } from './redux/slices/authSlice';
import { AppDispatch, RootState } from './redux/store';
import AppRouter from './Routes';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
    if (user) {
      console.log('a');
      API.graphql(graphqlOperation(createUser, { input: user }));
    }
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
