import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Projects from "../components/Projects"
import { Link } from "gatsby"
import LI from "../../static/In-White-26.png"
import GH from "../../static/GitHub-Mark-Light-32px.png"
import EmailIcon from "@mui/icons-material/Email"
import {
  ArrowRight,
  ArrowRightAlt,
  ContentPaste,
  ContentPasteGo,
  ContentPasteOutlined,
  EmailOutlined,
  Mouse,
} from "@mui/icons-material"
import { Button, ButtonGroup } from "@mui/material"

export default function Home() {
  const email = "sidhopkins14@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
  }

  return (
    <Layout>
      <section className={styles.banner}>
        <div className={styles.col}>
          <h3>Technologies</h3>
          <p className={styles.skills}>
            <span>Frontend:</span> JavaScript React Bootstrap HTML CSS
            styled-components CSS-modules Material-UI Google-Fonts
          </p>
          <p className={styles.skills}>
            <span>Tools:</span> Git/GitHub npm VS-Code Chrome-DevTools
          </p>
          <p className={styles.skills}>
            <span>DevOps:</span> Gatsby Netlify Cloudinary
          </p>
        </div>
        <div className={styles.col}>
          <h2>I am a self-taught front end web developer...</h2>
          <p className={styles.elevator}>
            passionate about building clean, user friendly and responsive UIs.
            Curious, organized, discerning, & dedicated. Always interested in
            learning new technologies and languages!
          </p>
          <div className={styles.social}>
            <ButtonGroup size="large" variant="contained">
              <Button>View My Github</Button>
              <Button>View My LinkedIn</Button>
              <Button className={styles.click} onClick={handleCopy()}>
                Copy my Email
                <ContentPasteOutlined />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </section>
      <Projects />
    </Layout>
  )
}
