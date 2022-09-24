import React from 'react'
import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import TopNavigation from '../Components/TopNavigation'
import { DrinkConsumer } from '../Context/DrinkContext'

function HomePages() {
  function handleChange(e) {
    e.preventDefault();
    console.log( e.target.value );
  }
  return (
    <DrinkConsumer>
      {Context => {
        return (
          <div>
          <TopNavigation />
          <nav className='nav'>
            <NavLink to={"all-drinks"}>All Drinks</NavLink>
            <NavLink to={"cocktail"}>CockTail</NavLink>
          </nav>
          <input type={"text"} placeholder="Drink starting with ..." onChange={handleChange}  />
            <h1>All drinks starting with letter {Context.searchLetter}</h1>
         <Outlet/>
        </div>
        )
      }}
    </DrinkConsumer>
     
  )
}

export default HomePages