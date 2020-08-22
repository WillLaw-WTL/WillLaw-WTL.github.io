import React, { Fragment } from 'react'

export default function Blog() {
  return (
    <Fragment>
      <h1>Blog</h1>

      {/*
        When dealing with React Router
        https://dev.to/easybuoy/deploying-react-app-from-github-to-netlify-3a9j 
      */}
      <div class="blog-card">
        <div class="card-container">
          <h2>What it's like to PM</h2>
          <p class="inverted">A recap of my experience at MLH Fellowship and leading Babel Sandboxes</p>
          <p class="inverted description">August 17, 2020</p>
        </div>
      </div>
    </Fragment>
  )
}
