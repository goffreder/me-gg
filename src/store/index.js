import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import home from '../home';

const reducers = combineReducers({ home });

const store = createStore(reducers, applyMiddleware(thunk, apiMiddleware));

export default store;
