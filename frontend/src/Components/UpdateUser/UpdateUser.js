import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { id } = useParams(); // Extracting id from useParams

  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        age: String(inputs.age),
        address: String(inputs.address),
      }).then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate('/userdetails')); // Use navigate to redirect
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" onChange={handleChange} value={inputs.name || ''} required />
        <br /><br />

        <label htmlFor="gmail">Gmail:</label>
        <br />
        <input type="text" id="gmail" name="gmail" onChange={handleChange} value={inputs.gmail || ''} required />
        <br /><br />

        <label htmlFor="age">Age:</label>
        <br />
        <input type="text" id="age" name="age" onChange={handleChange} value={inputs.age || ''} required />
        <br /><br />

        <label htmlFor="address">Address:</label>
        <br />
        <input type="text" id="address" name="address" onChange={handleChange} value={inputs.address || ''} required />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;