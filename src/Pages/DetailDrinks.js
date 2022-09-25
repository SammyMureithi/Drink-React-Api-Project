import React from 'react'
import { useParams } from 'react-router-dom'
import TopNavigation from '../Components/TopNavigation';
import { DrinkConsumer } from '../Context/DrinkContext';

function DetailDrinks() {
    const { drinkID } = useParams();
    return (
        <DrinkConsumer>
            {Context => {
                const allData = Context.allDrinks;
                const myDrink = allData.filter( data => data.idDrink === drinkID );
                const res = myDrink.map( element => {
                    return (
                        <div key={element.idDrink} className="detailCard">
                            <img src={element.strDrinkThumb} />
                            <div className='description'>
                                <h1>{element.strDrink}</h1>
                                <h2>Category :{element.strCategory}</h2>
                                <p>Instruction: {element.strInstructions}</p>
                            </div>
                        </div>
                       
                    )
                })
                console.log( myDrink );
                return (
                    <>
                        <TopNavigation/>
                        {res}
                    </>
                )
            }}
        </DrinkConsumer>
    )
}

export default DetailDrinks