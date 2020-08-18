import React from 'react'

import Bbt from "../../img/bbt.png"
import iOS from "../../img/ios2.png"
import SaaS from "../../img/saas.png"
import SaaSHTML from "../../img/saastohtml.png"

export default function Design() {
  return (
    <>
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
    </>
  )
}
