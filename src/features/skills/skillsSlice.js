import { createSlice } from '@reduxjs/toolkit';
import skills from './skillsData.json';

const skillsSlice = createSlice({
  name: 'skill',
  initialState: {
    data: skills,
  },
  reducers: {
    addSkillAction(state, action) {
      state.data = [...state.data, action.payload];
    },
    deleteSkillAction(state, action) {
      state.data = state.data.filter(
        (skill) => skill.name !== action.payload.name,
      );
    },
    updateSkillAction(state, action) {
      const index = state.data.findIndex(
        (quality) => quality.id === action.payload.id,
      );
      state.data[index] = action.payload;
    },
  },
});

export default skillsSlice.reducer;
export const { addSkillAction, deleteSkillAction, updateSkillAction } = skillsSlice.actions;
