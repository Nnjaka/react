import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'someName',
    visible: true,
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
  },
});

export const { toggleProfile, changeName } = profileSLice.actions;
export const profileReducer = profileSLice.reducer;