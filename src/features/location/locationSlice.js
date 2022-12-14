import {createSlice} from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    value: document.title,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const {update} = locationSlice.actions;
export default locationSlice.reducer;
