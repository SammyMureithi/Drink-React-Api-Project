import React, { createContext, useEffect, useState } from 'react'
const { Consumer, Provider } = createContext();
function DrinkContext( props ) {
    const [allDrinks, setAllDrinks] = useState( [] );
    const [searchLetter, setSearchLetter] = useState( "" );
    
    useEffect( () => {
        fetch( `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}` )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Fetch unsuccessful" );
                }
                return res
            } )
            .then( res => res.json() )
            .then( data => setAllDrinks( data.drinks )
)
            .catch( error => console.log( error ) )
    }, [searchLetter] );
    function handleLetterChange( e ) {
        e.preventDefault()
        setSearchLetter( e.target.value[0] );
    }
    console.log( allDrinks );
  return (
      <div>
          <Provider value={{ name: "Mure", letterChange: handleLetterChange, searchLetter: searchLetter }}>
          <input type={"text"} placeholder="Drink starting with ..."
              onChange={handleLetterChange} value={searchLetter} />
              {props.children}
          </Provider>
    </div>
  )
}
export  {DrinkContext,Consumer as DrinkConsumer}