import React from 'react'

export default function Article() {
  const articles = [
    {
      title: "Capsule Neural Networks — The future for autonomous vehicles",
      link: "https://towardsdatascience.com/capsule-neural-networks-the-future-for-autonomous-vehicles-f97bc3f7918"
    },
    {
      title: "LaserNet | A step into a fully autonomous society",
      link: "https://medium.com/analytics-vidhya/lasernet-a-closer-step-into-a-fully-autonomous-society-6ded766db7fe"
    },
    {
      title: "Vehicular Fog Computing — Communicating without lag",
      link: "https://medium.com/analytics-vidhya/vehicular-fog-computing-communication-without-lag-3c2452f4885b"
    },
    {
      title: "Class AI - Improving the efficency of data labeling processes",
      link: "https://www.youtube.com/watch?v=6twEiJQ1HAc&feature=emb_title"
    }
  ];

  return (
    <>
      <h1>Articles and Talks</h1>
      <ul>
        {articles.map(article => (
          <li key={`${article.link}`}>
            <a href={`${article.link}`} target="_blank">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <p>
        These are the one's I think are the most interesting, you can check the rest out on my
        <a href="https://medium.com/@w.law" target="_blank">{" "}Medium</a> profile.
      </p>
    </>
  )
}