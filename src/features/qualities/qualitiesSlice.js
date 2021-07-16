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
    deleteQualitiesAction(state, action) {
      state.sources.data = state.sources.filter(
        (quality) => quality.name !== action.payload.name,
      );
    },
  },
});

export default qualitiesSlice.reducer;
export const { addQualitiesAction, deleteQualitiesAction } = qualitiesSlice.actions;
