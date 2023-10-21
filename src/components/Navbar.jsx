import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/error'>Error Page</Link>
    </nav>
  )
}

export default Navbar
