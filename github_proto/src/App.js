import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Users from './components/users/Users';
import Search from './components/users/Search';
import api from './api';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = async text => {
    setLoading(true);
    const res = await api.get(
      `search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    console.log(res.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const checkUsers = users.length > 0;

  return (
    <Layout>
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        checkUsers={checkUsers}
      />
      <Users users={users} loading={loading} />
    </Layout>
  );
}
