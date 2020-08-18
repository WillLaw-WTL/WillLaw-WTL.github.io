import React, { useState } from 'react'

import Now from "./homeSections/Now"
import Software from "./homeSections/Software"
import Consulting from "./homeSections/Consulting"
import Article from "./homeSections/Article"
import Design from "./homeSections/Design"

export default function Home() {
  const [emailValue, setEmail] = useState("")

  return (
    <>
      <Now />
      <Software />
      <Consulting />
      <Article />
      <Design />

      <h1 style={{ marginTop: "15px" }}>Newsletter</h1>
      <p>
        Signup for my newsletter where I update my audience with the things that I'm working on
        every couple of months. Check out my past ones
        <a
          href="https://us20.campaign-archive.com/home/?u=19b5484360b07ef43fd97b267&id=be88e6b4d8"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}here.
        </a>
      </p>

      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
      <div id="mc_embed_signup" style={{ backgroundColor: "#252525" }}>
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=19b5484360b07ef43fd97b267&amp;id=be88e6b4d8"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >

          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              value={emailValue}
              onChange={(e) => setEmail(e.target.value)}
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="Email"
              required
            />

            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input
                type="text"
                name="b_19b5484360b07ef43fd97b267_be88e6b4d8"
                tabIndex="-1" value=""
                readOnly
              />
            </div>

            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                style={{ backgroundColor: "black" }}
                readOnly
              />
            </div>
          </div>

        </form>
      </div>

      <br />
      <br />
    </>
  )
}
