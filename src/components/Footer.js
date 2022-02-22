import React from "react"
import LI from "../../static/In-White-26.png"
import GH from "../../static/GitHub-Mark-Light-32px.png"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <Link to="https://www.linkedin.com/in/sidney-hopkins/">
          <img src={LI} alt="LinkedIn logo" />
        </Link>
        <Link to="https://github.com/sidneyhopkins">
          <img src={GH} alt="github logo" />
        </Link>
      </div>
      <h5>Copyright 2022 Sidney Hopkins</h5>
    </footer>
  )
}
