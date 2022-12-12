import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'someName',
    visible: true,
    isAuth: false
}

const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    auth: (state, action) => {
      state.isAuth = action.payload;
    }
  },
});

export const { toggleProfile, changeName, auth } = profileSLice.actions;
export const profileReducer = profileSLice.reducer;