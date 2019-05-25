import React, { Component } from 'react';
import { data } from './helper';
import { DELETE_CONTACT } from './types';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
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

export class Provider extends Component {
  state = {
    contacts: data,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const { Consumer } = Context;
