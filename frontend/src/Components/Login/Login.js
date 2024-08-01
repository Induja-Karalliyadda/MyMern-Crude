import React, { useState } from 'react';
import Nav from '../Home/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Login success");
        navigate("/userdetails");
      } else {
        setError("Login error: " + response.message);
      }
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      email: user.email,
      password: user.password,
    });
    return res.data;
  };

  return (
    <div>
      <Nav />
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleInputChange}
          required
        /><br /><br />
        <label>Password</label><br />
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleInputChange}
          required
        /><br /><br />
        <button type='submit' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
