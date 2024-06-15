import React, { useState, useEffect } from 'react';
import Filteredlist from './Filteredlist';
import './styles.css';

const Autocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFislteredUsers] = useState([]);
  const [showfilters, setShowFilters] = useState(false);
  const filterUsers = (event) => {
    let query = event.target.value.toLowerCase();
    if (query.length > 1) {
      const filteredNames =
        users && users.length
          ? users.filter(
              (item) => item.firstName.toLowerCase().indexOf(query) > -1
            )
          : null;

      setFislteredUsers(filteredNames);
      if (filteredNames.length) {
        setShowFilters(true);
      }
    } else {
      setFislteredUsers([]);
    }
  };
  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://dummyjson.com/users');
      const usersList = await response.json();
      setUsers(usersList.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return (
      <div>
        <h2>Loading please wait...</h2>
      </div>
    );
  } else {
    return (
      <div>
        <input
          type="text"
          name="inputtext"
          id="inputtext"
          placeholder="Enter name..."
          onChange={filterUsers}
        />
        {showfilters && <Filteredlist filteredUsers={filteredUsers} />}
      </div>
    );
  }
};

export default Autocomplete;
