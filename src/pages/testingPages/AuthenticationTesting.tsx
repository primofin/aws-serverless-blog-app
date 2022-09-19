import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from '../../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';

import { getCurrentUser } from '../../redux/slices/authSlice';
import { AppDispatch, RootState } from '../../redux/store';

Amplify.configure(awsExports);

function AuthenticationTesting() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  async function updateUser() {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
      given_name: 'vanilla',
    });
  }

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  return (
    <Authenticator>
      <main>{user && <h2>Welcome {user.username} to the homepage!</h2>}</main>
      <button onClick={updateUser}>update</button>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Authenticator>
  );
}

export default AuthenticationTesting;
