import { createSlice } from '@reduxjs/toolkit';
import talents from './talentsData.json';

const talentsSlice = createSlice({
  name: 'talents',
  initialState: {
    data: talents,
  },
  reducers: {
    addTalentsAction(state, action) {
      state.talents = [...state.talents, action.payload];
    },
    deleteTalentsAction(state, action) {
      state.data = state.data.filter(
        (talent) => talent.name !== action.payload.name,
      );
    },
  },
});

export default talentsSlice.reducer;
export const { addTalentsAction, deleteTalentsAction } = talentsSlice.actions;
