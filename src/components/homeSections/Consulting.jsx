import React from 'react'

import Swl from "../../assets/swl.pdf"
import Kidogo from "../../assets/kidogo2.pdf"

export default function Consulting() {
  return (
    <>
      <h1>Consulting Projects</h1>
      <ul>
        <li>
          <a href={Swl} target="_blank" rel="noopener noreferrer">
            Reducing household expenditures through sharing economics
          </a>
        </li>
        <li>
          <a href={Kidogo} target="_blank" rel="noopener noreferrer">
            Increasing profits for EDC centers in Kenya by tackling malnutrition
          </a>
        </li>
      </ul>
      <p>These were done in collaboration with Sidewalk Labs Toronto and Kidogo Co.</p>
    </>
  )
}
