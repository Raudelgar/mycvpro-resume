import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer.js';
import profileReducer from './profileReducer.js';
import skilsReducer from './skilsReducer.js';
import experienceReducer from './experienceReducer.js';
import educationReducer from './educationReducer.js';
import pdfReducer from './pdfReducer.js';
import errorReducer from './errorReducer.js';
import projectsReducer from './projectsReducer.js';

const STATE = {
	isLoading: loaderReducer,
	profile: profileReducer,
	skills: skilsReducer,
	experience: experienceReducer,
	education: educationReducer,
	projects: projectsReducer,
	pdfState: pdfReducer,
	error: errorReducer,
};

export default combineReducers(STATE);
