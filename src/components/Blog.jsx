import React from 'react'
import blog from "./data/blog.json"

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>

      {/*
        When dealing with React Router
        https://dev.to/easybuoy/deploying-react-app-from-github-to-netlify-3a9j 
      */}
      {blog["blog"].map(post => (
        <div class="blog-card">
          <a href={`${post.link}`} target="_blank" rel="noopener noreferrer">
            <div class="card-container">
              <h2>{post.title}</h2>
              <p class="inverted">{post.description}</p>
              <p class="inverted description">{post.date}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  )
}
