import React, { useState, useEffect } from 'react';
import User from './User';
import './user.css';
import api from '../../api';

export default function Users({ users, loading }) {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await api.get(
  //       `users?client_id=${
  //         process.env.REACT_APP_GITHUB_CLIENT_ID
  //       }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     setUsers(res.data);
  //     console.log(res.data);
  //   };
  //   getUsers();
  // }, []);

  return (
    <>
      {loading ? (
        <div className="loading" />
      ) : (
        <div className="grid">
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}
