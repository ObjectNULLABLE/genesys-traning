import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import skillsReducer from './features/skills/skillsSlice';
import sourcesReducer from './features/sources/sourcesSlice';
import talentsReducer from './features/talents/talentsSlice';

const rootReducer = combineReducers({
  skills: skillsReducer,
  sources: sourcesReducer,
  talents: talentsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
