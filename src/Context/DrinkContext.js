import React, { createContext } from 'react'
const { Consumer, Provider } = createContext();
function DrinkContext(props) {
  return (
      <div>
          <Provider value={{name:"Mure"}}>
              {props.children}
          </Provider>
    </div>
  )
}

export  {DrinkContext,Consumer as DrinkConsumer}