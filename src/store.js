import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import skillsReducer from './features/skills/skillsSlice';
import sourcesReducer from './features/sources/sourcesSlice';

const rootReducer = combineReducers({
  skills: skillsReducer,
  sources: sourcesReducer,
});

export default configureStore({
  reducer: rootReducer,
});
