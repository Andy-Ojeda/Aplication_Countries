import React from 'react'
import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Card({country}) {
  
  const {idPais} = useParams();
  
  return (
    <div className={style.contenedor}>
      <Link to={`/countries/detail/${country.idPais}`}> 
         
        <img src={country.flagImage} alt="ImagenBandera" />
        <h3>{country.name}</h3>
        {idPais && <h4>{country.capital}</h4>}
        <h4>{idPais? `Continent: ${country.continent}` : `(${country.continent})`}</h4>
        {idPais && <h4>Subregion: {country.subregion}</h4>}
        {idPais && <h4>Population: {country.population}</h4>}
        {idPais && <h4>Area: {country.area}</h4>}
        
      </Link>
    </div>
  )
}

export default Card