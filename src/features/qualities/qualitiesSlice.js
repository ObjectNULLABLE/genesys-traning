import { createSlice } from '@reduxjs/toolkit';
import qualities from './qualitiesData.json';

const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    data: qualities,
  },
  reducers: {
    addQualitiesAction(state, action) {
      state.qualities = [...state.qualities, action.payload];
    },
  },
});

export default qualitiesSlice.reducer;
export const { addQualitiesAction } = qualitiesSlice.actions;
