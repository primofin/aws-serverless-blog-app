import { Link, Navigate } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

import awsExports from '../../aws-exports';
import { useState } from 'react';

Amplify.configure(awsExports);

function AuthenticationTesting() {
  const [state, setState] = useState();
  // Retrieve current authenticated user
  Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => {
      console.log(user);
      setState(user);
    })
    .catch((err) => console.log(err));
  return (
    <>
      {state && <Navigate to="/" replace={true} />}
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default withAuthenticator(AuthenticationTesting);
