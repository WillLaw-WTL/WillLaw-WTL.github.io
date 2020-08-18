import React, { Fragment } from 'react'

import Bbt from "../img/bbt.png"
import iOS from "../img/ios2.png"
import SaaS from "../img/saas.png"
import SaaSHTML from "../img/saastohtml.png"

import Swl from "../assets/swl.pdf"
import Kidogo from "../assets/kidogo2.pdf"

export default function Home() {
    return (
        <Fragment>
            <h1>Now</h1>
            <ul>
                <li>
                    Contributing to
                    <a href="https://github.com/SheetJS/js-word" target="_blank">
                        {" "}WordJS - Word Processing Library
                    </a>
                </li>
                <li>
                    Contributing to
                    <a href="https://github.com/babel/sandboxes" target="_blank">
                        {" "}Babel - Repl Sandboxes
                    </a>
                </li>
            </ul>

            <h1>Software Projects</h1>
            <ul>
                <li>
                    <a href="https://github.com/wlawt/synbiolic" target="_blank">
                        AI Drug Discovery Platform
                    </a>
                    {" "}(Azure, TensorFlow, MERN)
                </li>
                <li>
                    <a href="https://github.com/wlawt/covid19-project" target="_blank">
                        COVID-19 Forcasting Model
                    </a>
                    {" "}(Python, Scikit)
                </li>
                <li>
                    <a href="https://openmed.tech/" target="_blank">
                        Decentralized medical records/health card
                </a>
                    {" "}(BigChainDB, MERN)
                </li>
                <li>
                    <a href="https://github.com/wlawt/rootcase" target="_blank">
                        Biodegradeable phone case startup (J.A. program)
                    </a>
                    {" "}(eJS, Node, Stripe)
                </li>
                <li>
                    <a href="https://github.com/wlawt/ideaspace" target="_blank">
                        The Medium for Secondary Students
                    </a>
                    {" "}(SpringBoot, Java, React)
                </li>
                <li>
                    <a href="https://github.com/wlawt/htc" target="_blank">
                        Manage/track volunteer hours 10x faster
                </a>
                    {" "}(MERN)
            </li>
            </ul>
            <p>
                You can find the rest on my <a href="https://github.com/wlawt" target="_blank">Github</a>.
                These are the ones that I think are cool
            </p>

            <h1>Consulting Projects</h1>
            <ul>
                <li>
                    <a href={Swl} target="_blank">
                        Reducing household expenditures through sharing economics
                    </a>
                </li>
                <li>
                    <a href={Kidogo} target="_blank">
                        Increasing profits for EDC centers in Kenya by tackling malnutrition
                    </a>
                </li>
            </ul>
            <p>These were done in collaboration with Sidewalk Labs Toronto and Kidogo Co.</p>

            <h1>Articles and Talks</h1>
            <ul>
                <li>
                    <a href="https://towardsdatascience.com/capsule-neural-networks-the-future-for-autonomous-vehicles-f97bc3f7918"
                        target="_blank">
                        Capsule Neural Networks — The future for autonomous vehicles
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/analytics-vidhya/lasernet-a-closer-step-into-a-fully-autonomous-society-6ded766db7fe"
                        target="_blank">
                        LaserNet | A step into a fully autonomous society
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/analytics-vidhya/vehicular-fog-computing-communication-without-lag-3c2452f4885b"
                        target="_blank">
                        Vehicular Fog Computing — Communicating without lag
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=6twEiJQ1HAc&feature=emb_title" target="_blank">
                        Class AI - Improving the efficency of data labeling processes
                    </a>
                </li>
            </ul>
            <p>
                These are the one's I think are the most interesting, you can check the rest out on my
                <a href="https://medium.com/@w.law" target="_blank">{" "}Medium</a> profile.
            </p>

            <h1>Design Library</h1>
            <div class="row">
                <div class="column">
                    <img class="design" src={Bbt} alt="BBT iOS Design" />
                </div>
                <div class="column">
                    <img class="design" src={SaaS} alt="SaaS Design" />
                </div>
            </div>
            <div class="row" style={{ marginTop: "10px" }}>
                <div class="column">
                    <img class="design" src={SaaSHTML} alt="SaaS-to-HTML Design" />
                </div>
                <div class="column">
                    <img class="design" src={iOS} alt="iOS Design" />
                </div>
            </div>

            <h1 style={{ marginTop: "15px" }}>Newsletter</h1>
            <p>
                Signup for my newsletter where I update my audience with the things that I'm working on
                every couple of months. Check out my past ones <a
                    href="https://us20.campaign-archive.com/home/?u=19b5484360b07ef43fd97b267&id=be88e6b4d8"
                    target="_blank">here.</a>
            </p>

            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
            <div id="mc_embed_signup" style={{ backgroundColor: "#252525" }}>
                <form
                    action="https://gmail.us20.list-manage.com/subscribe/post?u=19b5484360b07ef43fd97b267&amp;id=be88e6b4d8"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                    target="_blank" novalidate>

                    <div id="mc_embed_signup_scroll">
                        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email" required />
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                            <input type="text"
                                name="b_19b5484360b07ef43fd97b267_be88e6b4d8" tabindex="-1" value="" />
                        </div>
                        <div class="clear">
                            <input type="submit" value="Subscribe" name="subscribe"
                                id="mc-embedded-subscribe" class="button" style={{ backgroundColor: "black" }} />
                        </div>
                    </div>
                </form>
            </div>

            <br />
            <br />
        </Fragment>
    );
}
