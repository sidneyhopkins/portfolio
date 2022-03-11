import Close from "@mui/icons-material/Close"
import Menu from "@mui/icons-material/Menu"
import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../../static/copper.svg"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(prev => !prev)
  }

  return (
    <nav>
      <img src={logo} alt="Sidney Hopkins logo" />
      <div className="rightdiv">
        <button className="icon" onClick={toggleMenu}>
          {open ? (
            <Close
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          ) : (
            <Menu style={{ width: "40px", height: "40px" }} />
          )}
        </button>
        <div className={`links ${open ? " showmenu" : ""}`}>
          <Link onClick={toggleMenu} to="/">
            Home
          </Link>
          <Link onClick={toggleMenu} to="/about">
            About
          </Link>
          <Link onClick={toggleMenu} to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}
