import { createSlice } from '@reduxjs/toolkit';

const talentsSlice = createSlice({
  name: 'talents',
  initialState: {
    data: [],
  },
  reducers: {
    addTalentsAction(state, action) {
      state.talents = [...state.talents, action.payload];
    },
  },
});

export default talentsSlice.reducer;
export const { addTalentsAction } = talentsSlice.actions;
