import { createSlice } from '@reduxjs/toolkit';

const sourcesSlice = createSlice({
  name: 'sources',
  initialState: {
    data: [],
  },
  reducers: {
    addSourceAction(state, action) {
      state.sources = [...state.sources, action.payload];
    },
  },
});

export default sourcesSlice.reducer;
export const { addSourceAction } = sourcesSlice.actions;
