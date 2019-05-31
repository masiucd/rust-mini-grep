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

export const updateContact = contact => async dispatch => {
  const res = await api.put(`/users/${contact.id}`, contact);
  dispatch({ type: UPDATE_CONTACT, payload: res.data });
};

export const getContact = id => async dispatch => {
  const res = await api.get(`/users/${id}`);
  dispatch({ type: GET_CONTACT, payload: res.data });
};

export const addContact = contact => async dispatch => {
  const res = await api.post(`/users`, contact);
  dispatch({ type: ADD_CONTACT, payload: res.data });
};
