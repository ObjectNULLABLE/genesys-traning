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
    deleteSkillsAction(state, action) {
      state.data = state.data.filter(
        (skill) => skill.name !== action.payload.name,
      );
    },
  },
});

export default skillsSlice.reducer;
export const { addSkillAction, deleteSkillsAction } = skillsSlice.actions;
