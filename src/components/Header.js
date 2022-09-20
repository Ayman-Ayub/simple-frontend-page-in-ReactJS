import React from 'react'
import navbarlogo from "../logo192.png"


function Header() {
  return (
    <>
<header>
    <nav className="nav">
        <img src={navbarlogo} alt=""  className='nav-logo'/>
        <h3>ReactFacts</h3>
        <h4>React Course-Project 1</h4>
    </nav>
</header>
</>
  )
}

export default Header
