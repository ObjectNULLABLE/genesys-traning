import { createSlice } from '@reduxjs/toolkit';
import talents from './talentsData.json';

const talentsSlice = createSlice({
  name: 'talents',
  initialState: {
    data: talents,
  },
  reducers: {
    addTalentAction(state, action) {
      state.data = [...state.data, action.payload];
    },
    deleteTalentAction(state, action) {
      state.data = [
        ...state.data.filter((item) => item.id !== action.payload)];
    },
    updateTalentAction(state, action) {
      const index = state.data.findIndex(
        (talent) => talent.id === action.payload.id,
      );
      state.data[index] = action.payload;
    },
  },
});

export default talentsSlice.reducer;
export const { addTalentAction, deleteTalentAction, updateTalentAction } = talentsSlice.actions;
