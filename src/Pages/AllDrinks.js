import React from 'react'
import { DrinkConsumer } from '../Context/DrinkContext'

function AllDrinks() {
  return (
    <DrinkConsumer>
      {Context => {
       return  <h1>All Drinks by  {Context.name}</h1>
      }}
    </DrinkConsumer>
    
  )
}

export default AllDrinks