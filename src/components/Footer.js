import React from "react"
import LI from "../../static/LI.png"
import GH from "../../static/GH.png"

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/sidney-hopkins/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LI} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/sidneyhopkins"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GH} alt="github logo" />
        </a>
      </div>
      <h5>Copyright © 2022 Sidney Hopkins</h5>
    </footer>
  )
}
