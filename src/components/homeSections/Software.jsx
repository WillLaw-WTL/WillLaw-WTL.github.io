import React from 'react'

export default function Software() {
  const projects = [
    {
      hyperText: "AI Drug Discovery Platform",
      link: "https://github.com/wlawt/synbiolic",
      stack: "Azure, TensorFlow, MERN"
    },
    {
      hyperText: "COVID-19 Forcasting Model",
      link: "https://github.com/wlawt/covid19-project",
      stack: "Python, Scikit"
    },
    {
      hyperText: "Decentralized medical records/health card",
      link: "https://openmed.tech/",
      stack: "BigChainDB, MERN"
    },
    {
      hyperText: "Biodegradeable phone case startup (J.A. program)",
      link: "https://github.com/wlawt/rootcase",
      stack: "eJS, Node, Stripe"
    },
    {
      hyperText: "The Medium for Secondary Students",
      link: "https://github.com/wlawt/ideaspace",
      stack: "SpringBoot, Java, React"
    },
    {
      hyperText: "Manage/track volunteer hours 10x faster",
      link: "https://github.com/wlawt/htc",
      stack: "MERN"
    }
  ]

  return (
    <>
      <h1>Software Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={`${project.link}`}>
            <a href={`${project.link}`} target="_blank">
              {project.hyperText}
            </a>
            {" "}({project.stack})
          </li>
        ))}
      </ul>
      <p>
        You can find the rest on my <a href="https://github.com/wlawt" target="_blank">Github</a>.
        These are the ones that I think are cool
      </p>
    </>
  )
}
