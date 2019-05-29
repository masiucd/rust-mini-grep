import { FETCH_USER } from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      // return [...state, action.payload];
      return action.payload;
    default:
      return state;
  }
};
