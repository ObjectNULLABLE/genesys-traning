import { createSlice } from '@reduxjs/toolkit';
import sources from './sourcesData.json';

const sourcesSlice = createSlice({
  name: 'sources',
  initialState: {
    data: sources,
  },
  reducers: {
    addSourceAction(state, action) {
      state.sources = [...state.sources, action.payload];
    },
  },
});

export default sourcesSlice.reducer;
export const { addSourceAction } = sourcesSlice.actions;
