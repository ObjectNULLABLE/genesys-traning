import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import skillsReducer from './features/skills/skillsSlice';

const rootReducer = combineReducers({
  skills: skillsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
