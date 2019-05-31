import api from '../api';
import {
  GET_CONTACT,
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_GONTACT,
  UPDATE_CONTACT,
} from './types';

export const getContacts = () => async dispatch => {
  const res = await api.get('/users');
  dispatch({ type: GET_CONTACTS, payload: res.data });
};

export const deleteContact = id => async dispatch => {
  try {
    await api.delete(`/users/${id}`);
    dispatch({ type: DELETE_GONTACT, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_GONTACT, payload: id });
  }
};
