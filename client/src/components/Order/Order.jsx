import React from 'react';
import style from './Order.module.css';
import { useState, useEffect } from 'react';
import { order } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

function Order() {
    const dispatch = useDispatch();
    
    const handleSelect = (event)=> {
      try {
        const value = event.target.value;
        dispatch(order(value));
      } catch (error) {
        console.log('ERROR EN ORDER...', error);
      }
    }
  
      


  return (
    <div className={style.contenedor}>
        
        <select className={style.selectOrder} name="order" defaultValue="order" onChange={handleSelect}>
            <option value="order">Order...</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
            <option value="poblacion_asc">Población Ascendente</option>
            <option value="poblacion_desc">Población Descendente</option>
 
        </select>
            
    </div>
  )
}

export default Order