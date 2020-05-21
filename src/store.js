import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import middlewares from './middlewares/middlewares.js';

export default createStore(rootReducer, middlewares);
