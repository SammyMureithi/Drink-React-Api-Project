import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DrinkConsumer } from '../Context/DrinkContext'

function AllDrinks() {
  const [search, setSeach] = React.useState( "" );
  const navigation = useNavigate();
  function handleChange(e) {
    e.preventDefault();
    setSeach(e.target.value)
  }
  return (
    <DrinkConsumer>
      {Context => {
        const filterdData=Context.allDrinks.filter(element => element.strDrink.includes(search))
        const Drink = filterdData.map( element => <div key={element.idDrink + element.strDrink} >
          <img src={element.strDrinkThumb} alt="img-Drinks" onClick={()=>navigation(`all-drinks/detailed/${element.idDrink}`)}/>
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