import React, { Component } from 'react';
import { data } from './helper';
import { DELETE_CONTACT } from './types';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: data,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Concumer = Context.Provider;
