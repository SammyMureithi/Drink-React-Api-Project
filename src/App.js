import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AllDrinks from './Pages/AllDrinks';
import Coctail from './Pages/Coctail';
import DetailDrinks from './Pages/DetailDrinks';
import HomePages from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePages/>}>
          <Route index  element={<AllDrinks />} />
          <Route path='all-drinks' element={<AllDrinks />}/>
            
          <Route path='cocktail' element={<Coctail/>}/>
        </Route>
        <Route path='detailed/:drinkID' element={<DetailDrinks/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
