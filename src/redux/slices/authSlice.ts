/* eslint-disable @typescript-eslint/no-explicit-any */
import { Auth } from 'aws-amplify';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, User } from '../../common/types';

const extraActions = createExtraActions();

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: null,
    isLoggedIn: false,
    user: undefined,
    error: undefined,
  } as AuthState,
  reducers: {
    signOut: (state: AuthState) => {
      state.isLoggedIn = false;
      state.user = undefined;
    },
  },
  extraReducers: createExtraReducers(),
});

function createExtraActions() {
  return {
    getCurrentUser: getCurrentUser(),
  };

  // Retrieve current authenticated user
  function getCurrentUser() {
    return createAsyncThunk(`auth/getAll`, async () => {
      const data = await Auth.currentAuthenticatedUser({
        bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      });
      console.log('data', data);
      return { username: data.username, email: data.attributes.email } as User;
    });
  }
}

function createExtraReducers() {
  return {
    ...getCurrentUser(),
  };

  function getCurrentUser() {
    const { pending, fulfilled, rejected } = extraActions.getCurrentUser;
    return {
      [pending as any]: (state: AuthState) => {
        state.isLoading = true;
      },
      [fulfilled as any]: (state: AuthState, action: PayloadAction<User>) => {
        state.user = action.payload;
        console.log('appState', state.user);
        console.log('payload', action.payload);
      },
      [rejected as any]: (state: AuthState, action: any) => {
        console.log('Error', action.error);
        state.error = { error: action.error };
      },
    };
  }
}

export const { signOut } = authSlice.actions;
export const { getCurrentUser } = extraActions;

export default authSlice.reducer;
