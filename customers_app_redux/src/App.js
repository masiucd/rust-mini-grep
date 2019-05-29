import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './components/Customers';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Customers} />
        </Switch>
      </Router>
    </>
  );
}
