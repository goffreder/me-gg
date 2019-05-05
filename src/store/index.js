import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk, apiMiddleware));

export default store;
