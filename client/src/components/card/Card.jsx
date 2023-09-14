import React from 'react'
import style from './Card.module.css';

function Card({country}) {
  return (
    <div className={style.contenedor}>
        <img src={country.flagImage} alt="ImagenBandera" />
        <h3>{country.name}</h3>
        <h4>({country.continent})</h4>
    </div>
  )
}

export default Card