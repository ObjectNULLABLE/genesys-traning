import { createSlice } from '@reduxjs/toolkit';
import qualities from './qualitiesData.json';

const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    data: qualities,
  },
  reducers: {
    addQualitiesAction(state, action) {
      state.data = [...state.data, action.payload];
    },
    deleteQualitiesAction(state, action) {
      state.sources.data = state.sources.filter(
        (quality) => quality.name !== action.payload.name,
      );
    },
    updateQualitiesAction(state, action) {
      const index = state.data.findIndex(
        (quality) => quality.name === action.payload.current.name,
      );
      state.data[index] = action.payload.new;
    },
  },
});

export default qualitiesSlice.reducer;
export const {
  addQualitiesAction,
  deleteQualitiesAction,
  updateQualitiesAction,
} = qualitiesSlice.actions;
