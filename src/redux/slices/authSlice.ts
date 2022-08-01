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
    // signOut: (state: AuthState) => {
    //   state.isLoggedIn = false;
    //   state.user = undefined;
    // },
  },
  extraReducers: createExtraReducers(),
});

function createExtraActions() {
  return {
    getCurrentUser: getCurrentUser(),
    signOut: signOut(),
  };

  // Retrieve current authenticated user
  function getCurrentUser() {
    return createAsyncThunk(`auth/getCurrentUser`, async () => {
      const data = await Auth.currentAuthenticatedUser({
        bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      });
      const {
        email,
        sub,
        given_name,
        family_name,
        picture,
        gender,
        address,
        phone_number,
        website,
        locale,
      } = data.attributes;

      const user = {
        username: data.username,
        email,
        id: sub,
        given_name,
        family_name,
        picture,
        gender,
        address,
        phone_number,
        website,
        locale,
      } as User;
      return user;
    });
  }
  function signOut() {
    return createAsyncThunk(`auth/signOut`, async () => {
      await Auth.signOut();
    });
  }
}

function createExtraReducers() {
  return {
    ...getCurrentUser(),
    ...signOut(),
  };

  function getCurrentUser() {
    const { pending, fulfilled, rejected } = extraActions.getCurrentUser;
    return {
      [pending as any]: (state: AuthState) => {
        state.isLoading = true;
      },
      [fulfilled as any]: (state: AuthState, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
      },
      [rejected as any]: (state: AuthState, action: any) => {
        state.error = { error: action.error };
      },
    };
  }

  function signOut() {
    const { pending, fulfilled, rejected } = extraActions.signOut;
    return {
      [pending as any]: (state: AuthState) => {
        state.isLoading = true;
      },
      [fulfilled as any]: (state: AuthState) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.user = undefined;
      },
      [rejected as any]: (state: AuthState, action: any) => {
        console.log('Sign out Error', action.error);
        state.error = { error: action.error };
      },
    };
  }
}

// export const { signOut } = authSlice.actions;
export const { getCurrentUser, signOut } = extraActions;

export default authSlice.reducer;
