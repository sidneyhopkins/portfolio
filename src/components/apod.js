import ArrowDownward from "@mui/icons-material/ArrowDownward"
import React, { useEffect, useState } from "react"
import * as styles from "../styles/apod.module.css"

export default function APOD() {
  const [image, setImage] = useState({})
  const [click, setClick] = useState(false)

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=GyFFwqrw0XBODZEbQn6wskWJCBjOLLWoJS1sAhhA"
    )
      .then(res => res.json())
      .then(result => {
        setImage(result)
        console.log(result)
      })
  }, [])

  return (
    <section className={styles.section}>
      <h3>NASA's Astronomy Picture of the Day</h3>
      <div className={styles.container}>
        {click !== true ? (
          <div className={styles.imageBox}>
            <button className={styles.button} onClick={() => setClick(true)}>
              <span>Get APOD</span>
              <ArrowDownward />
            </button>
            Let's put it here...
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
  )
}
