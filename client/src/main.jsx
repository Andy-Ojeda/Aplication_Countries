import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

//? Configuro para traerme la store---------------
import { Provider } from 'react-redux';
import store from './redux/store.js';
//?-----------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>    {/*  Conecto mi store a  */}
          <BrowserRouter>         {/*   todo mi documento */}
            <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
