import React from 'react'
import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import TopNavigation from '../Components/TopNavigation'

function HomePages() {
  return (
      <div>
      <TopNavigation />
      <nav className='nav'>
        <NavLink to={"all-drinks"}>All Drinks</NavLink>
        <NavLink to={"cocktail"}>CockTail</NavLink>
      </nav>
     <Outlet/>
    </div>
  )
}

export default HomePages