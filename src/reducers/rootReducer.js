import { combineReducers } from 'redux';
import logoLoaderReducer from './logoLoaderReducer.js';

const STATE = {
	isLogoLoader: logoLoaderReducer,
};

export default combineReducers(STATE);
