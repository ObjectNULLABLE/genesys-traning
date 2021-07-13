import { createSlice } from '@reduxjs/toolkit';

const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    data: [],
  },
  reducers: {
    addQualitiesAction(state, action) {
      state.qualities = [...state.qualities, action.payload];
    },
  },
});

export default qualitiesSlice.reducer;
export const { addQualitiesAction } = qualitiesSlice.actions;
