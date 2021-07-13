import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: 'skill',
  initialState: {
    data: [],
  },
  reducers: {
    addSkillAction(state, action) {
      state.skills = [...state.skills, action.payload];
    },
  },
});

export default skillsSlice.reducer;
export const { addSkillAction } = skillsSlice.actions;
