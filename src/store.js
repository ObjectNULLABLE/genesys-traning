import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import skillsReducer from './features/skills/skillsSlice';
import qualitiesReducer from './features/qualities/qualitiesSlice';

const rootReducer = combineReducers({
  skills: skillsReducer,
  qualities: qualitiesReducer,
});

export default configureStore({
  reducer: rootReducer,
});
