import React from 'react'
import { DrinkConsumer } from '../Context/DrinkContext'

function Coctail() {
  return (
    <DrinkConsumer>
      {Context => {
        return (
          <h1>CockTail by {Context.name}</h1>
        )
      }}
    </DrinkConsumer>
  )
}

export default Coctail