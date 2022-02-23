import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import ProjectComponent from "../components/ProjectComponent"
import ContentPasteOutlined from "@mui/icons-material/ContentPasteOutlined"
import Button from "@mui/material/Button"

export default function Home() {
  const email = "sidhopkins14@gmail.com"

  return (
    <Layout>
      <section className={styles.banner}>
        <div className={styles.col1}> </div>
        <div className={styles.col2}>
          <h3>I am a self-taught front end web developer</h3>
          <p className={styles.elevator}>
            passionate about building clean, user friendly and responsive UIs.
            Curious, organized, discerning, & dedicated. Always interested in
            learning new technologies and languages!
          </p>
        </div>
      </section>
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          variant="contained"
          size="large"
          href="https://github.com/sidneyhopkins"
        >
          View My Github
        </Button>
        <Button
          className={styles.button}
          variant="contained"
          size="large"
          href="https://www.linkedin.com/in/sidney-hopkins/"
        >
          View My LinkedIn
        </Button>
        <Button
          className={styles.button}
          variant="contained"
          size="large"
          onClick={() => {
            navigator.clipboard.writeText(email)
          }}
        >
          Copy My Email
          <ContentPasteOutlined />
        </Button>
      </div>

      <h2>Tech Skills</h2>

      <div className={styles.tech}>
        <div className={styles.list}>
          <h3>Frontend:</h3>
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

        <div className={styles.list}>
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>npm</li>
            <li>Visual Studio Code</li>
            <li>Chrome DevTools</li>
          </ul>
          <h3>DevOps</h3>
          <ul>
            <li>Gatsby</li>
            <li>Netlify</li>
            <li>Cloudinary</li>
          </ul>
        </div>

        <div className={styles.list}>
          <h3>Currently Learning:</h3>
          <ul>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
      <ProjectComponent />
    </Layout>
  )
}
