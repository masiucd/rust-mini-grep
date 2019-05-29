import api from '../api';
import { DELETE_USER, ADD_USER, UPDATE_USER, FETCH_USER } from '../types';

export const deleteCustomer = () => async dispatch => {
  const resp = await api.get('/users');
  dispatch({ type: DELETE_USER, payload: resp.data });
};
export const fetchCustomers = () => async dispatch => {
  const resp = await api.get('/users');
  dispatch({ type: FETCH_USER, payload: resp.data });
};
