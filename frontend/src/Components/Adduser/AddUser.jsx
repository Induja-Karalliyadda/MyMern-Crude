import React from 'react';
import Nav from '../Home/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function AddUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        gmail: "",
        age: "",
        address: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => navigate('/userdetails')); // Use absolute path
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/users", {
            name: String(inputs.name),
            gmail: String(inputs.gmail),
            age: String(inputs.age),
            address: String(inputs.address),
        }).then(res => res.data);
    };

    return (
        <div>
            <Nav />
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" id="name" name="name" onChange={handleChange} value={inputs.name} required />
                <br /><br />

                <label htmlFor="gmail">Gmail:</label>
                <br />
                <input type="text" id="gmail" name="gmail" onChange={handleChange} value={inputs.gmail} required />
                <br /><br />

                <label htmlFor="age">Age:</label>
                <br />
                <input type="text" id="age" name="age" onChange={handleChange} value={inputs.age} required />
                <br /><br />

                <label htmlFor="address">Address:</label>
                <br />
                <input type="text" id="address" name="address" onChange={handleChange} value={inputs.address} required />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddUser;