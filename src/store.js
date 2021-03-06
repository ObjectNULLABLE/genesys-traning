import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import skillsReducer from './features/skills/skillsSlice';
import sourcesReducer from './features/sources/sourcesSlice';
import talentsReducer from './features/talents/talentsSlice';
import qualitiesReducer from './features/qualities/qualitiesSlice';

const rootReducer = combineReducers({
  skills: skillsReducer,
  qualities: qualitiesReducer,
  sources: sourcesReducer,
  talents: talentsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
