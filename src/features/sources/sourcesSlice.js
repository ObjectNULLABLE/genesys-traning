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
    deleteSourceAction(state, action) {
      state.data = state.data.filter(
        (source) => source.name !== action.payload.name,
      );
    },
  },
});

export default sourcesSlice.reducer;
export const { addSourceAction, deleteSourceAction } = sourcesSlice.actions;
