import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'


function NavBar() {
  return (
    <nav className="nav">
    {/* <div className="logo">
    <img src= "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220704%2Fourlarge%2Fpngtree-striking-yoga-people-silhouette-logo-vector-illustration-png-image_5602760.png&type=sc960_832" /> 
    </div> */}
    <Link to="/" className = "site-title"><h1>Harmony&Yoga</h1></Link>
         <ul>
          <CustomLink to ="/" id="/">Home</CustomLink>
          <CustomLink to ="/class" id="class">Classes</CustomLink>
          <CustomLink to ="/instructor" id="instructor">Instructor</CustomLink>
          <CustomLink to ="/about" id="about">About</CustomLink>
         <CustomLink to ="/login" id="login">Login</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className= {isActive ? "active" : "" }>
    <Link to={to} {...props} >
      {children}
    </Link>
    </li>
  )
}

export default NavBar
