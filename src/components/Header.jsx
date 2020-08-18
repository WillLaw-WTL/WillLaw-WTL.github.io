import React, { Fragment, useState } from 'react'
import Headshot from "../img/hs.jpg"

import Home from "./Home"
import Blog from "./Blog"

import Resume from "../assets/SWE Resume.pdf"

export default function Header() {
    const [showBlog, setShowBlog] = useState(false);

    return (
        <div className="wrapper">
            <header>
                <h1>William Law</h1>
                <img src={Headshot} style={{ borderRadius: "10px" }} alt="Avatar" />
                <p>Typing for a living 🙃😎</p>
                <p>Computer Science @ uWaterloo '25</p>
                <p style={{ paddingBottom: 0, marginBottom: 0 }}>
                    <b>Let's chat if you:</b> have an interesting startup opportunity in software/product
                    that can help lots of people <b>OR</b> a cool project that you're working on that you think can go somewhere
                </p>
                <div style={{ marginBottom: "10px", paddingBottom: "10px" }}>
                    <input onclick="changetheme()" type="checkbox" id="switch"></input><label for="switch">Toggle</label>
                </div>
                <div>
                    <iframe
                        src="https://github.com/sponsors/wlawt/button"
                        title="Sponsor wlawt" height="35" width="107"
                        style={{ border: 0, marginBottom: "10px" }}>
                    </iframe>
                </div>

                {!showBlog ? (
                    <div class="view"><a href="#" onClick={() => setShowBlog(true)}>Blog</a></div>
                ) : (
                        <div class="view"><a href="#" onClick={() => setShowBlog(false)}>Home</a></div>
                    )}
                <br />
                <div class="view"><a href="mailto:williamlaw.wtl@gmail.com">Email</a></div>
                <div class="view"><a href="https://twitter.com/wlaw_" target="_blank">Twitter</a></div>
                <div class="view"><a href="https://medium.com/@w.law" target="_blank">Medium</a></div>
                <div class="view"><a href="https://github.com/wlawt" target="_blank">Github</a></div>
                <div class="view"><a href="https://devpost.com/willLaw" target="_blank">Devpost</a></div>
                <div class="view"><a href="https://dribbble.com/wlawt" target="_blank">Dribbble</a></div>
                <div class="view" style={{ marginBottom: "10px" }}><a href={Resume} target="_blank">Resume</a></div>
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
