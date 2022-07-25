import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../common/types';

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  error: unknown;
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {
    login: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});
