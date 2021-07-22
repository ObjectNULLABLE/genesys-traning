import { createSlice } from '@reduxjs/toolkit';
import qualities from './qualitiesData.json';

const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    data: qualities,
  },
  reducers: {
    addQualityAction(state, action) {
      state.data = [...state.data, action.payload];
    },
    deleteQualityAction(state, action) {
      state.data = [
        ...state.data.filter((item) => item.id !== action.payload)];
    },
    updateQualityAction(state, action) {
      const index = state.data.findIndex(
        (quality) => quality.id === action.payload.id,
      );
      state.data[index] = action.payload;
    },
  },
});

export default qualitiesSlice.reducer;
export const {
  addQualityAction,
  deleteQualityAction,
  updateQualityAction,
} = qualitiesSlice.actions;
