import { Link } from 'react-router-dom';
import { Storage } from 'aws-amplify';

export function TestingPage() {
  return (
    <>
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

export function About() {
  // create function to work with Storage
  const addToStorage = () => {
    Storage.put(
      'javascript/MyReactComponent.js',
      `
    import React from 'react'
    const App = () => (
      <p>Hello World</p>
    )
    export default App
  `
    )
      .then((result) => {
        console.log('result: ', result);
      })
      .catch((err) => console.log('error: ', err));
  };

  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      {/* add click handler */}
      <button onClick={addToStorage}>Add To Storage</button>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
