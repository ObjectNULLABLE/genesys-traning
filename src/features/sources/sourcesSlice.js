import { createSlice } from '@reduxjs/toolkit';
import sources from './sourcesData.json';

const sourcesSlice = createSlice({
  name: 'sources',
  initialState: {
    data: sources,
  },
  reducers: {
    addSourceAction(state, action) {
      state.data = [...state.data, action.payload];
    },
    deleteSourceAction(state, action) {
      state.data = state.data.filter(
        (source) => source.name !== action.payload.name,
      );
    },
    updateSourceAction(state, action) {
      const index = state.data.findIndex(
        (source) => source.name === action.payload.current.name,
      );
      state.data[index] = action.payload.new;
    },
  },
});

export default sourcesSlice.reducer;
export const { addSourceAction, deleteSourceAction, updateSourceAction } = sourcesSlice.actions;
