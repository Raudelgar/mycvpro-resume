import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

export default composeEnhancers(applyMiddleware(...middlewares));
