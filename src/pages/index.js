import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/home.module.scss"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Link, graphql } from "gatsby"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import HighlightAltRoundedIcon from "@mui/icons-material/HighlightAltRounded"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"

export default function Home({ data }) {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [display, setDisplay] = useState({ display: "none" })
  const email = "sidhopkins14@gmail.com"

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.GATSBY_APOD_API_KEY}`
    )
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(result => {
        setImage(result)
        console.log(result)
      })
      .catch(error => {
        console.error("error fetching data: ", error)
        setError(error)
      })
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setDisplay({ display: "inline" })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay({ display: "none" })
    }, 5000)
    return () => clearInterval(interval)
  }, [display])

  return (
    <Layout>
      <Seo />
      <div className={styles.bannercontainer}>
        <div className={styles.contentwrapper}>
          <h1>{data.site.siteMetadata.description}</h1>
          <section className={styles.banner}>
            <div className={styles.elevator}>
              <p>
                My name is Sidney. I am a self-taught front-end web developer
                passionate about building clean, user friendly & responsive UIs.
                I'm always interested in learning new technologies & languages!
              </p>
            </div>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                href="https://github.com/sidneyhopkins"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #6F732F" }}
              >
                <GitHubIcon />
                <span>View my GitHub</span>
                <ChevronRightIcon />
              </a>
              <a
                className={styles.button}
                href="https://www.linkedin.com/in/sidney-hopkins/"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: " #3C5233" }}
              >
                <LinkedInIcon />
                <span>View my LinkedIn</span>
                <ChevronRightIcon />
              </a>
              <button
                className={styles.button}
                style={{ backgroundColor: " #155447" }}
                onClick={copyEmail}
              >
                <HighlightAltRoundedIcon />
                <span>Copy my email</span>
                <CheckRoundedIcon
                  className={styles.checkicon}
                  style={display}
                />
              </button>
            </div>
          </section>
        </div>
      </div>

      <div className={styles.contentwrapper}>
        <h2>Technologies</h2>
        <div className={styles.tech}>
          <div className={styles.a}>
            <h3>Front End</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
              <li>Google Fonts</li>
              <li>Styled-Components</li>
              <li>CSS-modules</li>
              <li>SVGs</li>
              <li>APIs</li>
            </ul>
          </div>
          <div className={styles.b}>
            <h3>Tools</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>npm</li>
              <li>Visual Studio Code</li>
              <li>Chrome DevTools</li>
              <li>Kanban</li>
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
            <h3>Currently Learning</h3>
            <ul>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>GraphQL</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Jest</li>
              <li>React Testing Library</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={styles.container}>
        <h2>My Favorite API</h2>
        <section className={styles.api}>
          <h3>NASA's Astronomy Picture of the Day</h3>
          <div className={styles.imagecontainer}>
            <div
              className={styles.load}
              style={loading ? { display: "flex" } : { display: "none" }}
            >
              Loading Image...
            </div>
            <div className={styles.imageBox}>
              <img
                src={image.hdurl}
                alt=""
                style={
                  loading ? { visibility: "hidden" } : { visibility: "visible" }
                }
                onLoad={() => setLoading(false)}
              />
              <figcaption
                style={
                  loading ? { visibility: "hidden" } : { visibility: "visible" }
                }
              >
                <p className={styles.title}>{image.title}</p>
                <p>
                  {image.copyright !== "" && (
                    <span className={styles.copyright}>
                      Copyright {image.copyright} {image.date}
                    </span>
                  )}
                </p>
                <p className={styles.explanation}>{image.explanation}</p>
              </figcaption>
            </div>
          </div>
        </section>
      </section>
      <div className={styles.projectcontainer}>
        <div className={styles.projectwrapper}>
          <Link className={styles.projectbutton} as="button" to="/projects">
            <span>More projects</span> <ChevronRightIcon />
          </Link>
        </div>
      </div>
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
