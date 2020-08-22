import React, { useState } from 'react'
import Headshot from "../img/hs.jpg"

import Home from "./Home"
import Blog from "./Blog"

import Resume from "../assets/William Law Resume.pdf"

export default function Header2() {
  const [showBlog, setShowBlog] = useState(false);

  const socials = [
    {
      name: "Email",
      link: "mailto:williamlaw.wtl@gmail.com"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/william-t-law/"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/wlaw_"
    },
    {
      name: "Medium",
      link: "https://medium.com/@w.law"
    },
    {
      name: "Github",
      link: "https://github.com/wlawt"
    },
    {
      name: "Devpost",
      link: "https://devpost.com/willLaw"
    },
    {
      name: "Dribbble",
      link: "https://dribbble.com/wlawt"
    }
  ]

  return (
    <div className="wrapper">
      <header>
        <h1>William Law</h1>
        <img src={Headshot} style={{ borderRadius: "10px" }} alt="Avatar" />

        <p>Typing for a living <span role="img" aria-labelledby="">🙃😎</span></p>
        <p>Computer Science @ uWaterloo '25</p>

        <p style={{ paddingBottom: 0, marginBottom: 0 }}>
          <b>Let's chat if you:</b> have an interesting startup opportunity in software/product
          that can help lots of people <b>OR</b> a cool project that you're working on that you think can go somewhere
        </p>

        <div style={{ marginBottom: "10px", paddingBottom: "10px" }}></div>

        {/* <div>
          <iframe
            src="https://github.com/sponsors/wlawt/button"
            title="Sponsor wlawt" height="35" width="107"
            style={{ border: 0, marginBottom: "10px" }}>
          </iframe>
        </div> */}

        {!showBlog ? (
          <div className="view"><a href="#" onClick={() => setShowBlog(true)}>Blog</a></div>
        ) : (
            <div className="view"><a href="#" onClick={() => setShowBlog(false)}>Home</a></div>
          )}

        <br />

        {socials.map(social => (
          <div className="view" key={`${social.name}`}><a href={`${social.link}`}>{social.name}</a></div>
        ))}
        <div className="view" style={{ marginBottom: "10px" }}><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></div>
      </header>

      <section>
        {!showBlog ? (
          <Home />
        ) : (
            <Blog />
          )}
      </section>
    </div>
  )
}
