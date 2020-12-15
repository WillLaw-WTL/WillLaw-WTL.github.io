import React from 'react'
import projects from "../data/data.json"

export default function Software() {
  return (
    <>
      <h1>Software Projects</h1>
      <ul>
        {projects["projects"].map(project => (
          <li key={`${project.link}`}>
            <a href={`${project.link}`} target="_blank" rel="noopener noreferrer">
              {project.hyperText}
            </a>
          </li>
        ))}
      </ul>
      <p>
        You can find the rest on my <a href="https://github.com/wlawt" target="_blank" rel="noopener noreferrer">Github</a>.
        These are the ones that I think are cool
      </p>
    </>
  )
}
