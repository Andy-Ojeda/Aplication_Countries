import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import image from '../../../public/logo.gif'

function Nav() {


  return (
    <div className={style.contenedor}>
          <Link to={'/countries'}>
      <div className={style.logo}>
              <img className={style.image} src={image} alt="Logo"/>
      </div>
          </Link>
      <div className={style.contTitulo}>
          <h2>Countries App</h2>
          
          <Link to={'/countries'}>
            <input type="button" value="INICIO" />
          </Link>
          
          <Link to={'/countries/home'}>
            <input type="button" value="HOME" />
          </Link>
          <Link to={'/countries/about'}>
            <input type="button" value="ABOUT" />
          </Link>
          <Link to={'/countries/form'}>
            <input type="button" value="NEW Activity" />
          </Link>
      </div>  
    </div>
  )
}

export default Nav