import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className={style.contenedor}>
        <h2>Countries App</h2>
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
  )
}

export default Nav