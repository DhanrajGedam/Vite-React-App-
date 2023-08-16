import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className='container'>
      <div className="logo">
      <img src="/images/brand_logo.png" alt="Brand Logo" />
      </div>
      <ul className='points'>
        <li href='#'>Menu</li>
        <li href='#'>Location</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
      </ul>
      <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation
