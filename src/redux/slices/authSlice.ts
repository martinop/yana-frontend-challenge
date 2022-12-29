import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  userName: string;
  email: string;
}

interface AuthState {
  user: User | null;
}

type UserPayload = Omit<User, 'id'>;

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<UserPayload>) => {
      state.user = {
        id: Date.now(),
        userName: action.payload.userName,
        email: action.payload.email,
      };
    },
  },
});

export const { signUp } = authSlice.actions;

export default authSlice.reducer;
