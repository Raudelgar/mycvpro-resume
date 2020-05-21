import { combineReducers } from 'redux';
import logoLoaderReducer from './logoLoaderReducer.js';
import profileReducer from './profileReducer.js';
import skilsReducer from './skilsReducer.js';
import experienceReducer from './experienceReducer.js';

const STATE = {
	isLogoLoader: logoLoaderReducer,
	profile: profileReducer,
	skills: skilsReducer,
	experience: experienceReducer,
};

export default combineReducers(STATE);
