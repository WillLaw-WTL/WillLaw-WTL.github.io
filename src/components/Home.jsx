import React from 'react'

import Now from "./homeSections/Now"
import Software from "./homeSections/Software"
import Consulting from "./homeSections/Consulting"
import Article from "./homeSections/Article"
import Design from "./homeSections/Design"
import Newsletter from "./homeSections/Newsletter"

export default function Home() {
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
      <Newsletter />

      <br />
      <br />
    </>
  )
}
