/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, graphqlOperation } from 'aws-amplify';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { listPosts } from '../../graphql/queries';
import { Post, PostState } from '../../common/types';

const extraActions = createExtraActions();

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    isLoading: null,
    posts: [],
    error: undefined,
  },
  reducers: {},
  extraReducers: createExtraReducers(),
});

function createExtraActions() {
  return {
    getAllPosts: getAllPosts(),
  };

  function getAllPosts() {
    return createAsyncThunk(`post/getAllPosts`, async () => {
      const { data } = (await API.graphql(graphqlOperation(listPosts))) as any;
      const posts = data.listPosts.items as Post[];
      console.log('posts', data.listPosts.items);

      return posts;
    });
  }
}

function createExtraReducers() {
  return {
    ...getAllPosts(),
  };

  function getAllPosts() {
    const { pending, fulfilled, rejected } = extraActions.getAllPosts;
    return {
      [pending as any]: (state: PostState) => {
        state.isLoading = true;
      },
      [fulfilled as any]: (state: PostState, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.isLoading = false;
      },
      [rejected as any]: (state: PostState, action: any) => {
        console.log('Error', action.error);
        state.error = { error: action.error };
      },
    };
  }
}

export const { getAllPosts } = extraActions;

export default postSlice.reducer;
