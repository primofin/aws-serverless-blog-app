import { API, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import { createPost } from '../../graphql/mutations';

type Post = { title: string };
const initialState = { title: '' };
function TestingAPI() {
  const [formState, setFormState] = useState(initialState);
  // eslint-disable-next-line
  const [apiError, setApiError] = useState<any>();
  const [posts, setPosts] = useState<Post[]>([]);

  const errorMessage = apiError && (
    <p>
      {/* eslint-disable-next-line */}
      {apiError.errors.map((error: any, index: string) => (
        <p key={index}>{error.message}</p>
      ))}
    </p>
  );
  async function addPost() {
    try {
      if (!formState.title) {
        return;
      }
      const post = { ...formState };
      setPosts([...posts, post]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createPost, { input: post }));
      setApiError(undefined);
    } catch (error) {
      console.error('Failed creating todo:', error);
      setApiError(error);
    }
  }
  return (
    <div>
      {errorMessage}
      <div>
        <input
          onChange={(event) => setFormState({ ...formState, title: event.target.value })}
          placeholder="title"
        />
        <button onClick={addPost}>Create Todo</button>
      </div>
    </div>
  );
}

export default TestingAPI;
