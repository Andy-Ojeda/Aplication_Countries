import React from 'react';
import style from './Order.module.css';

function Order() {
    
    const handleSelect = ()=> {
        console.log('b');
    }
    

  return (
    <div className={style.contenedor}>
        
        <select name="order" defaultValue="orderCountry" onChange={handleSelect}>
            <option value="orderCountry">Order...</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
            <option value="poblacion">Población</option>
        </select>
    </div>
  )
}

export default Order