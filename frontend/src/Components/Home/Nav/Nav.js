import React from 'react'
import '../Nav/Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
        <ul className='home-ul'>
            <li className='home-11'>
                <Link to="/mainhome" className="active home-a">
                <h1>Home</h1>
                </Link>
            </li>
            <li className='home-11'>
                <Link to="/adduser" className="active home-a">
                <h1>ADD User</h1>
                </Link>
            </li>
            <li className='home-11'>            
                <Link to="/userdetails" className="active home-a">
                <h1>User Details</h1>
                </Link>
            </li>
            <li className='home-11'>            
                <Link to="/register" className="active home-a">
                <button>Register</button>
                </Link>
            </li>
            <li className='home-11'>            
                <Link to="/log" className="active home-a">
                <button>Login</button>
                </Link>
            </li>
        </ul>

    </div>
  )
}

export default Nav