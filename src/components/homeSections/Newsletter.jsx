import React, { useState } from 'react'

export default function Newsletter() {
  const [emailValue, setEmail] = useState("")

  return (
    <>
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
      <div id="mc_embed_signup" style={{ backgroundColor: "#2F3437" }}>
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
    </>
  )
}
