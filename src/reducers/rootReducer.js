import { combineReducers } from 'redux';
import logoLoaderReducer from './logoLoaderReducer.js';
import profileReducer from './profileReducer.js';
import skilsReducer from './skilsReducer.js';
import experienceReducer from './experienceReducer.js';
import educationReducer from './educationReducer.js';

const STATE = {
	isLogoLoader: logoLoaderReducer,
	profile: profileReducer,
	skills: skilsReducer,
	experience: experienceReducer,
	education: educationReducer,
};

export default combineReducers(STATE);
