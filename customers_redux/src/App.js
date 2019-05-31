import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';
import Contacts from './components/contacts/Contacts';
import Add from './components/contacts/Add';
import Edit from './components/contacts/Edit';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/contact/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </Provider>
  );
}
