import React from 'react';
import style from './Order.module.css';
import { useState, useEffect } from 'react';
import { order } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

function Order() {
    const dispatch = useDispatch();
    const [selectOption, setSelectOption] = useState("");
    
    useEffect(()=>{
      if (selectOption !== ''){   //! Tuve que agregar este IF, sino no andaba. 
        dispatch(order(selectOption));
      }
    },[selectOption])
    
    const handleSelect = (event)=> {
      // console.log('ALGO', event.target.value);  
      setSelectOption(event.target.value);
    }


  return (
    <div className={style.contenedor}>
        
        <select name="order" defaultValue="order" onChange={handleSelect}>
            <option value="order">Order...</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
        </select>
            
    </div>
  )
}

export default Order