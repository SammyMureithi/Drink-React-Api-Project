import React from 'react'
import { DrinkConsumer } from '../Context/DrinkContext'

function AllDrinks() {
  return (
    <DrinkConsumer>
      {Context => {
        const Drink = Context.allDrinks.map( element => <div key={element.idDrink+element.strDrink} >
          <img src={element.strDrinkThumb} alt="img-Drinks" />
        </div> )
        return (
          <div>
            <h1>All Drinks by  {Context.name}</h1>
            <div className="drinks">
            {Drink}
            </div>
          </div>
          
        )
      }}
    </DrinkConsumer>
    
  )
}

export default AllDrinks