import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  isAuth: true,
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setIsAuth, setUser } = userSlice.actions;
export default userSlice.reducer;

const selectIsAuth = state => state.user.isAuth;
const selectUser = state => state.user.user;

export const selectAuthStatus = createSelector(
  selectIsAuth,
  isAuth => isAuth
);

export const selectCurrentUser = createSelector(
  selectUser,
  user => user
);

