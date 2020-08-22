import React from 'react'
import articles from "../data.json"

export default function Article() {
  return (
    <>
      <h1>Articles and Talks</h1>
      <ul>
        {articles["articles"].map(article => (
          <li key={`${article.link}`}>
            <a
              href={`${article.link}`}
              target="_blank" rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <p>
        These are the one's I think are the most interesting, you can check the rest out on my
        <a href="https://medium.com/@w.law" target="_blank" rel="noopener noreferrer">{" "}Medium</a> profile.
      </p>
    </>
  )
}