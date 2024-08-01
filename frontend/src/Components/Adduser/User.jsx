import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function User(props) {
  const { _id, name, gmail, age, address } = props.user;
  const navigate = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(res => res.data)
      .then(() => navigate("/"))
      .then(() => navigate('/userdetails'));
  };

  return (
    <div>
      <br />
      <h1>ID: {_id}</h1>
      <h1>Name {name}</h1>
      <h1>Gmail {gmail}</h1>
      <h1>Age {age}</h1>
      <h1>Address {address}</h1>
      <button><Link to={`/userdetails/${_id}`}>Update</Link></button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default User;