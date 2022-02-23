import React from "react"
import { Link } from "gatsby"
import { projects } from "../pages/data"
import * as style from "../styles/projects.module.css"

export default function ProjectComponent() {
  return (
    <section className={style.projects}>
      <h2>Projects</h2>
      <div className={style.grid}>
        {projects.map(item => (
          <div key={item.id} className={style.box}>
            <img src={item.img} alt={item.alt} />
            <div className={style.container}>
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={style.links}>
                  <Link className={style.link} to={item.code}>
                    Code
                  </Link>
                  <Link className={style.link} to={item.site}>
                    Site
                  </Link>
                </div>
              </figcaption>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
