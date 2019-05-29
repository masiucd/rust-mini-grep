import { combineReducers } from 'redux';
import deleteContact from './deleteReducer';
import fetchContacts from './fetchCustomer';

export default combineReducers({
  contacts: fetchContacts,
  deleteContact,
});
