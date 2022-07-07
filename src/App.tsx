import { Amplify } from 'aws-amplify';
import { Routes, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { About, TestingPage } from './pages/TestingPage';

Amplify.configure(awsExports);

function App({ signOut, user }: any) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Routes>
        <Route path="/" element={<TestingPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default withAuthenticator(App);
