import React, { useState } from 'react';
import Nav from '../Home/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => {
      alert("Register Success");
      history("/userdetails");
    }).catch((err) => {
      alert(err.message);
    });
  };

 // Ensure the API endpoint matches the route defined in your server
const sendRequest = async () => {
  await axios.post("http://localhost:5000/register", {
    name: String(user.name),
    gmail: String(user.gmail),
    password: String(user.password),
  }).then((res) => res.data);
};
  return (
    <div>
      <Nav />
      <h1>User Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input type='text' name='name' value={user.name} onChange={handleInputChange} required /><br /><br />
        <label>Gmail</label><br />
        <input type='email' name='gmail' value={user.gmail} onChange={handleInputChange} required /><br /><br />
        <label>Password</label><br />
        <input type='password' name='password' value={user.password} onChange={handleInputChange} required /><br /><br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;