import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <Seo />
      <section className={styles.header}>
        <h2>About</h2>
      </section>
      <section className={styles.content}>
        <div className={styles.a}>
          <h3>Code</h3>
          <p>
            I spend most of my time building apps and webpages using React. I
            plan to learn the back end in greater detail and pick up new
            languages as my projects get more complex. Some of my coding
            interests include animation and unique APIs.
          </p>
        </div>
        <div className={styles.b}>
          <h3>TV</h3>
          <ul>
            <li>Attack on Titan</li>
            <li>Dark</li>
            <li>Archive 81</li>
            <li>Doctor Who</li>
          </ul>
        </div>
        <div className={styles.c}>
          <h3>Reading List</h3>
          <ul>
            <li>
              Daring Greatly <span>by Brene Brown</span>
            </li>
            <li>
              Piranesi <span>by Susanna Clarke</span>
            </li>
            <li>
              Harry Potter and the Order of the Pheonix{" "}
              <span>by JK Rowling</span>
            </li>
          </ul>
        </div>
        <div className={styles.d}>
          <h3>Podcasts</h3>
          <ul>
            <li>
              Unlocking Us <span>with Brene Brown</span>
            </li>
            <li>
              Dare to Lead <span>with Brene Brown</span>
            </li>
            <li>
              The Happiness Lab <span>with Dr. Laurie Santos</span>
            </li>
            <li>
              A Slight Change of Plans <span>with Maya Shankar</span>
            </li>
          </ul>
        </div>
        <div className={styles.e}></div>
        <div className={styles.f}></div>
        <div className={styles.g}></div>
        <div className={styles.h}></div>
      </section>
    </Layout>
  )
}
