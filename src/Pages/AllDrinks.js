import React from 'react'
import { DrinkConsumer } from '../Context/DrinkContext'

function AllDrinks() {
  const [search, setSeach] = React.useState( "" );
  function handleChange(e) {
    e.preventDefault();
    setSeach(e.target.value)
  }
  return (
    <DrinkConsumer>
      {Context => {
        const filterdData=Context.allDrinks.filter(element => element.strDrink.includes(search))
        const Drink = filterdData.map( element => <div key={element.idDrink + element.strDrink} >
          <img src={element.strDrinkThumb} alt="img-Drinks" />
          <h1>{element.strDrink}</h1>
        </div> )
        return (
          <div>
            <input type={"text"} placeholder="Search.." value={search} onChange={handleChange} />
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