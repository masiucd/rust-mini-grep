import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Users from './components/users/Users';
import Search from './components/users/Search';
import api from './api';
import About from './components/pages/About';
import Alert from './components/Alert';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUsers = async text => {
    setLoading(true);
    const res = await api.get(
      `search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  const settingAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const checkUsers = users.length > 0;

  return (
    <Router>
      <Layout>
        <Alert alert={alert} />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  checkUsers={checkUsers}
                  settingAlert={settingAlert}
                />
                <Users users={users} loading={loading} />
              </>
            )}
          />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}
