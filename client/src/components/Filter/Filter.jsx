import React from 'react';
import style from './Filter.module.css';

function Filter() {
  return (
    <div className={style.contenedor}>
        
        <select name="filter" defaultValue="filterCountry">
            <option value="filterCountry">Filter...</option>
            <option value="continent">Continent</option>
            <option value="activity">Activity</option>
        </select>
    </div>
  )
}

export default Filter