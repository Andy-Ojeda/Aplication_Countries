import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import colors from '../src/colors.module.css';

import { Routes, Route, useLocation } from 'react-router-dom';

//? VIEWS...
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import About from './views/about/About';
import Detail from './views/detail/Detail';
import Form from './views/form/Form';


//? COMPONENTS...
import Nav from './components/nav/Nav';

function App() {
  // const [count, setCount] = useState(0)
  const { pathname } = useLocation();

  return (
    <>
    <div className='container'> 
      {pathname !== '/countries' && <Nav />}
      <Routes>
      
        <Route path='/countries' element={ <Landing /> } />
        <Route path='/countries/home' element={ <Home /> } />
        <Route path='/countries/home/:id' element={ <Home /> } />

        <Route path='/countries/About' element={ <About /> } />
        <Route path='/countries/detail/:idPais' element={ <Detail /> } />
        <Route path='/countries/form' element={ <Form /> } />
      
      </Routes>
    </div>
    </>
  )
}

export default App
