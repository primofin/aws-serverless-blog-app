import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { getCurrentUser } from '../../redux/slices/authSlice';
import { AppDispatch, RootState } from '../../redux/store';

Amplify.configure(awsExports);

function AuthenticationTesting() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  console.log('user', user);
  return (
    <>
      <main>
        {user && <h2>Welcome {user.username} to the homepage!</h2>}
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default withAuthenticator(AuthenticationTesting);
