import { createSlice } from '@reduxjs/toolkit';
import talents from './talentsData.json';

const talentsSlice = createSlice({
  name: 'talents',
  initialState: {
    data: talents,
  },
  reducers: {
    addTalentsAction(state, action) {
      state.data = [...state.data, action.payload];
    },
    deleteTalentsAction(state, action) {
      state.data = [
        ...state.data.filter((item) => item.id !== action.payload)];
    },
    updateTalentsAction(state, action) {
      const index = state.data.findIndex(
        (talent) => talent.name === action.payload.current.name,
      );
      state.data[index] = action.payload.new;
    },
  },
});

export default talentsSlice.reducer;
export const { addTalentsAction, deleteTalentsAction, updateTalentsAction } = talentsSlice.actions;
