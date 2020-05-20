import { combineReducers } from 'redux';
import logoLoaderReducer from './logoLoaderReducer.js';
import profileReducer from './profileReducer.js';
import skilsReducer from './skilsReducer.js';

const STATE = {
	isLogoLoader: logoLoaderReducer,
	profile: profileReducer,
	skills: skilsReducer,
};

export default combineReducers(STATE);
