import { createSlice } from '@reduxjs/toolkit';

const adversariesSlice = createSlice({
  name: 'adversaries',
  initialState: {
    data: [],
  },
  reducers: {
    addAdversariesAction(state, action) {
      state.adversaries = [...state.adversaries, action.payload];
    },
    deleteAdversariesAction(state, action) {
      state.data = state.data.filter(
        (adversary) => adversary.name !== action.payload.name,
      );
    },
  },
});

export default adversariesSlice.reducer;
export const { addAdversariesAction, deleteAdversariesAction } = adversariesSlice.actions;
