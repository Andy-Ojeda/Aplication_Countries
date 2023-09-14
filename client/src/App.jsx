import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

    {pathname !== '/countries' && <Nav />}
    <Routes>
    
      <Route path='/countries' element={ <Landing /> } />
      <Route path='/countries/home' element={ <Home /> } />
      <Route path='/countries/About' element={ <About /> } />
      <Route path='/countries/detail/:id' element={ <Detail /> } />
      <Route path='/countries/form' element={ <Form /> } />
    
    </Routes>
    </>
  )
}

export default App

{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}