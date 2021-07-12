import { createSlice } from '@reduxjs/toolkit';

const sourcesSlice = createSlice({
  name: 'sources',
  initialState: {
    data: [],
  },
  reducers: {
    addClientAction(state, action) {
      state.sources = [...state.sources, action.payload];
    },
  },
});

export default sourcesSlice.reducer;
export const { addSourceAction } = sourcesSlice.actions;
