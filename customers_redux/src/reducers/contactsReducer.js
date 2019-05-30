import {
  GET_CONTACTS,
  GET_CONTACT,
  DELETE_GONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
} from '../actions/types';

const initialState = { contacts: [], contact: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
