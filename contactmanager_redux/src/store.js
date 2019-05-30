import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReduce from './reducers';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReduce,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
