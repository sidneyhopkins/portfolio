import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import ProjectComponent from "../components/ProjectComponent"
import ContentPasteOutlined from "@mui/icons-material/ContentPasteOutlined"
import Button from "react-bootstrap/Button"
import LI from "../../static/LI.png"
import GH from "../../static/GH.png"
import { Link } from "gatsby"
import APOD from "../components/apod"
import { ArrowRight } from "@mui/icons-material"
// import banner from "../../static/sunset.jpg"

export default function Home() {
  const email = "sidhopkins14@gmail.com"

  return (
    <Layout>
      <h1>Front End Developer</h1>
      <section className={styles.banner}>
        <div className={styles.elevator}>
          <p>
            My name is Sidney. I am a self-taught front end web developer
            passionate about building clean, user friendly & responsive UIs. I'm
            always interested in learning new technologies & languages!
          </p>
        </div>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            href="https://github.com/sidneyhopkins"
          >
            <span>View My GitHub</span>
            <img src={GH} alt="gh logo" />
          </Button>
          <Button
            className={styles.button}
            variant="contained"
            href="https://www.linkedin.com/in/sidney-hopkins/"
          >
            <span>View My LinkedIn</span>
            <img src={LI} alt="LI logo" />
          </Button>
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => {
              navigator.clipboard.writeText(email)
            }}
          >
            <span>Copy My Email</span>
            <ContentPasteOutlined />
          </Button>
        </div>
      </section>
      <h2>Tech Skills</h2>
      <div className={styles.tech}>
        <div className={styles.a}>
          <h3>Frontend</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
            <li>Styled-Components</li>
            <li>Google Fonts</li>
            <li>CSS-modules</li>
          </ul>
        </div>

        <div className={styles.b}>
          <h3>Tools</h3>
          <ul>
            <li>Git / GitHub</li>
            <li>npm</li>
            <li>Visual Studio Code</li>
            <li>Chrome DevTools</li>
          </ul>
        </div>

        <div className={styles.c}>
          <h3>DevOps</h3>
          <ul>
            <li>Gatsby</li>
            <li>Netlify</li>
            <li>Cloudinary</li>
          </ul>
        </div>

        <div className={styles.d}>
          <h3>Frontend Learning</h3>
          <ul>
            <li>TypeScript</li>
            <li>SASS</li>
          </ul>
        </div>

        <div className={styles.e}>
          <h3>Backend Learning</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
      <section className={styles.apod}>
        <h2>My Favorite API</h2>
        <APOD />
      </section>
      <section className={styles.projectdiv}>
        <Link className={styles.projectbutton} as="button" to="/projects">
          <span>More Projects</span> <ArrowRight />
        </Link>
      </section>
    </Layout>
  )
}
