import React from 'react'

const navStyle = {
        backgroundColor: '#eeedf3',
        height: '5rem',
        width: '100',
        color: 'purple',
        border: 'none',
        padding: '0.6rem 1.2rem',
        margin: '0 auto'
}

function NavBar() {
  return (
    <nav>
    <div className="header" style = {navStyle}>
    <div className="logo" style={{display: flex, alignContent: center, justifyContent: center}}>
    {/*logo */}
    </div>
    <h1>Harmony&Yoga <img src= "C:\Users\ghkds\Desktop\solo_project\client\assets\logo.jpg" alt="logo"/></h1>
    </div>

    </nav>
  )
}

export default NavBar