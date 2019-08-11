import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import movieReducer from './movieDuck.js';

const middleware = applyMiddleware(thunk, logger);

const configureStore= createStore(
  movieReducer,
  middleware
);


export default configureStore;