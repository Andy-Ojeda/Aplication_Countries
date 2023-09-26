import React from 'react'
import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Card({country}) {
  // console.log('DATOS>>> ', country)
  const {idPais} = useParams();
  
  return (
        <div className= {idPais ? style.pepito : style.card}>
          <div className={idPais ? style.pepito1 : style.card2}>
              
              <div className= {idPais ? style.contenedor1 : style.contenedor}>
                  
                  <Link to={`/countries/detail/${country.idPais}`}> 
                    
                    <img src={country.flagImage} alt="ImagenBandera" />
                    <h3>{country.name}</h3>

                    {idPais && <h4>Capital: {country.capital}</h4>}
                    
                    <h4>{idPais? `Continent: ${country.continent}` : `(${country.continent})`}</h4>
                    
                    {idPais && <h4>Subregion: {country.subregion}</h4>}
                    {idPais? <h4>Population: {country.population}</h4> : <h5>-{country.population}-</h5>}
                    {idPais && <h4>Area: {country.area}</h4>}
                    
                  </Link>
              
              </div>
          </div>
        </div>
  )
}

export default Card