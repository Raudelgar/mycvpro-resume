import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer.js';
import profileReducer from './profileReducer.js';
import skilsReducer from './skilsReducer.js';
import experienceReducer from './experienceReducer.js';
import educationReducer from './educationReducer.js';

const STATE = {
	isLoading: loaderReducer,
	profile: profileReducer,
	skills: skilsReducer,
	experience: experienceReducer,
	education: educationReducer,
};

export default combineReducers(STATE);
