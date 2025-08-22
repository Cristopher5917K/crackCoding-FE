import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>Navbar
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
    </div>
  )
}

export default Navbar