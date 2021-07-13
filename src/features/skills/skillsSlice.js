import { createSlice } from '@reduxjs/toolkit';
import skills from './skillsData.json';

const skillsSlice = createSlice({
  name: 'skill',
  initialState: {
    data: skills,
  },
  reducers: {
    addSkillAction(state, action) {
      state.skills = [...state.skills, action.payload];
    },
  },
});

export default skillsSlice.reducer;
export const { addSkillAction } = skillsSlice.actions;
