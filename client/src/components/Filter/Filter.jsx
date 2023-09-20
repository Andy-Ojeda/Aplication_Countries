import React from 'react';
import style from './Filter.module.css';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filter } from '../../redux/actions/actions';
import { search_all } from '../../redux/actions/actions';

function Filter() {

  const [selectedValue, setSelectedValue] = useState("filterCountry...");
  const dispatch = useDispatch();

  const handlerSelect = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    // dispatch(filter(value));
    value === 'filter'? dispatch(search_all()) : dispatch(filter(value));

    // setSelectedValue('filterCountry');
  }


  return (
    <div className={style.contenedor}>
        
        <select name="filter" value={selectedValue} onChange={handlerSelect}>
            <option value="filter">🌎Continent Filter...</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter