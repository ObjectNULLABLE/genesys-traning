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
  },
});

export default talentsSlice.reducer;
export const { addTalentsAction } = talentsSlice.actions;
