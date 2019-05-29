import { DELETE_USER } from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
