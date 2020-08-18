import React from 'react'

import Bbt from "../../img/bbt.png"
import iOS from "../../img/ios2.png"
import SaaS from "../../img/saas.png"
import SaaSHTML from "../../img/saastohtml.png"

export default function Design() {
  return (
    <>
      <h1>Design Library</h1>
      <div className="row">
        <div className="column">
          <img className="design" src={Bbt} alt="BBT iOS Design" />
        </div>
        <div className="column">
          <img className="design" src={SaaS} alt="SaaS Design" />
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="column">
          <img className="design" src={SaaSHTML} alt="SaaS-to-HTML Design" />
        </div>
        <div className="column">
          <img className="design" src={iOS} alt="iOS Design" />
        </div>
      </div>
    </>
  )
}
