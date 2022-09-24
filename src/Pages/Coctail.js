import React from 'react'
import { DrinkConsumer } from '../Context/DrinkContext'

function Coctail() {
  return (
    <DrinkConsumer>
      {Context => {
         const filterdData=Context.allDrinks.filter(element => element.strCategory==="Cocktail")
         const Drink = filterdData.map( element => <div key={element.idDrink + element.strDrink} >
           <img src={element.strDrinkThumb} alt="img-Drinks" />
           <h1>{element.strDrink}</h1>
         </div> )
        return (
          <div>
            <h1>CockTail by {Context.name}</h1>
            <div className="drinks">
            {Drink}
            </div>
          </div>
         
        )
      }}
    </DrinkConsumer>
  )
}

export default Coctail