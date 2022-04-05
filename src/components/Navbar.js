import CloseRounded from "@mui/icons-material/CloseRounded"
import MenuRounded from "@mui/icons-material/MenuRounded"
import zIndex from "@mui/material/styles/zIndex"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import logo from "../static/black-logo.svg"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [xPos, setXPos] = useState(100)
  const [opacity, setOpacity] = useState(0)

  const css = {
    transform: `translateX(${xPos}px)`,
    opacity: `${opacity}`,
  }

  const toggleMenu = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    open ? setXPos(0) : setXPos(100)
    open ? setOpacity(1) : setOpacity(0)
  }, [open])

  return (
    <div className="navwrapper">
      <nav>
        <img className="logo" src={logo} alt="Sidney Hopkins" />
        <div className="rightdiv">
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <a
              href="https://github.com/sidneyhopkins"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sidney-hopkins/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <button className="icon" onClick={toggleMenu}>
            {open ? (
              <CloseRounded style={{ width: "40px", height: "40px" }} />
            ) : (
              <MenuRounded style={{ width: "40px", height: "40px" }} />
            )}
          </button>
          <div style={css} className="mobilemenu">
            <Link onClick={toggleMenu} to="/">
              Home
            </Link>
            <Link onClick={toggleMenu} to="/about">
              About
            </Link>
            <Link onClick={toggleMenu} to="/projects">
              Projects
            </Link>
            <a
              href="https://github.com/sidneyhopkins"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sidney-hopkins/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
