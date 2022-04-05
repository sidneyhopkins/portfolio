import React from "react"
import LI from "../../static/LI.png"
import GH from "../../static/GH.png"
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"
export default function Footer() {
  return (
    <footer>
      <div className="footerwrapper">
        <div className="footerheading">Sidney Hopkins</div>
        <ul className="social-links">
          <li>
            <a
              className="anchor"
              href="https://www.linkedin.com/in/sidney-hopkins/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LI} alt="LinkedIn" />
            </a>
          </li>

          <li>
            <a
              className="anchor"
              href="https://github.com/sidneyhopkins"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GH} alt="Github" />
            </a>
          </li>
        </ul>
        <div className="email">
          <EmailRoundedIcon className="emailicon" />
          <span>sidhopkins14@gmail.com</span>
        </div>
        <h5>Copyright © 2022 Sidney Hopkins</h5>
      </div>
    </footer>
  )
}
