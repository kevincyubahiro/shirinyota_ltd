import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

const Update = () => {
  const { userId } = useParams(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/select/${userId}`)
      .then((res) => {
        setUsername(res.data.username);
        setPassword(res.data.password);
      })
      .catch(error => {
        console.log('Failed to fetch user:', error.message);
      });
  }, [userId]);

  const handleUpdate = (userId) => {
    axios.put(`http://localhost:5000/update/${userId}`, {
      username,
      password
    })
      .then((res) => {
        alert('User updated successfully!');
      })
      .catch((error) => {
        console.log('Update failed:', error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }
    handleUpdate(userId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Update User</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" >Update</button>
      </form>
    </div>
  );
};

export default Update;
