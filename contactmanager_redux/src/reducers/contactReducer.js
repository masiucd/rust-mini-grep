import {} from '../types';
import { contacts } from '../helper';
import { GET_CONTACTS } from '../types';

const initialState = { contacts };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
