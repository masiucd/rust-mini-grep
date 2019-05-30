import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inistialState = {};

const middleWere = [thunk];

const store = createStore(
  rootReducer,
  inistialState,
  compose(
    applyMiddleware(...middleWere),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
