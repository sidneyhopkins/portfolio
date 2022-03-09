import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import ContentPasteOutlined from "@mui/icons-material/ContentPasteOutlined"
import LI from "../../static/LI.png"
import GH from "../../static/GH.png"
import { Link, graphql } from "gatsby"
import ArrowRight from "@mui/icons-material/ArrowRight"

export default function Home({ data }) {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const email = "sidhopkins14@gmail.com"

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_API_KEY}`
    )
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(result => {
        setImage(result)
        setLoading(false)
        console.log(result)
      })
      .catch(error => {
        console.error("error fetching data: ", error)
        setError(error)
      })
  }, [])

  return (
    <Layout>
      <h1>{data.site.siteMetadata.description}</h1>
      <section className={styles.banner}>
        <div className={styles.elevator}>
          <p>
            My name is Sidney. I am a self-taught front-end web developer
            passionate about building clean, user friendly & responsive UIs. I'm
            always interested in learning new technologies & languages!
          </p>
        </div>
        <div className={styles.buttons}>
          <a
            className={styles.button}
            href="https://github.com/sidneyhopkins"
            target="_blank"
            rel="noreferrer"
          >
            <span>View My GitHub</span>
            <img src={GH} alt="gh logo" />
          </a>
          <a
            className={styles.button}
            href="https://www.linkedin.com/in/sidney-hopkins/"
            target="_blank"
            rel="noreferrer"
          >
            <span>View My LinkedIn</span>
            <img src={LI} alt="LI logo" />
          </a>
          <button
            className={styles.button}
            onClick={() => {
              navigator.clipboard.writeText(email)
            }}
          >
            <span>Copy My Email</span>
            <ContentPasteOutlined />
          </button>
        </div>
      </section>
      <h2>Tech Skills</h2>
      <div className={styles.tech}>
        <div className={styles.a}>
          <h3>Front End</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
            <li>Google Fonts</li>
            <li>Styled-Components</li>
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
          <h3>Dev Ops</h3>
          <ul>
            <li>Gatsby</li>
            <li>Netlify</li>
            <li>Cloudinary</li>
          </ul>
        </div>
        <div className={styles.d}>
          <h3>
            Front End:
            <br />
            Currently Learning
          </h3>
          <ul>
            <li>TypeScript</li>
            <li>SASS</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className={styles.e}>
          <h3>
            Back End:
            <br />
            Currently Learning
          </h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
      <section>
        <h2>My Favorite API</h2>
        <section className={styles.api}>
          <h3>NASA's Astronomy Picture of the Day</h3>
          <div className={styles.container}>
            {loading ? (
              <div className={styles.imageBox}>
                Loading Photo...
                <div>
                  {error !== null && <span>Error Message: {error}</span>}
                </div>
              </div>
            ) : (
              <div className={styles.imageBox}>
                <img src={image.hdurl} alt="" />
                <figcaption>
                  <p className={styles.title}>{image.title}</p>
                  <p>
                    Copyright {image.copyright} {image.date}
                  </p>
                  <p className={styles.explanation}>{image.explanation}</p>
                </figcaption>
              </div>
            )}
          </div>
        </section>
      </section>
      <section className={styles.projectdiv}>
        <Link className={styles.projectbutton} as="button" to="/projects">
          <span>More Projects</span> <ArrowRight />
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        copyright
        description
        title
      }
    }
  }
`
