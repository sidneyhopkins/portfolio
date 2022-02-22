import { Link } from "gatsby"
import React from "react"
import logo from "../../static/8.svg"

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Sidney Hopkins logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projectspage">Projects</Link>
      </div>
    </nav>
  )
}
