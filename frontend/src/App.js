import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddUser from './Components/Adduser/AddUser';
import UserDetails from './Components/UserDetails/UserDetails'
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div >

    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mainhome" element={<Home/>}/>
        <Route path="adduser" element={<AddUser/>}/>
        <Route path="/userdetails" element={<UserDetails/>}/>
        <Route path="/userdetails/:id" element={<UpdateUser/>}/>
      </Routes>
      </React.Fragment>      
    </div>
  );
}

export default App;
