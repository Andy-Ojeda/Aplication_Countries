import React from 'react';
import style from './Searchbar.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { search, search_all } from '../../redux/actions/actions';

function Searchbar() {

    const [textBox, setTextBox] = useState("");
    const dispatch = useDispatch();


    //* Guardo el valor del textBox en estado LOCAL "textBox"
    const handleChange = (event)=> {
      setTextBox(event.target.value);
      // console.log('Mi evento...', event.target.value);
    }
    

    const handleButton = (event)=> {
      const buttonName = event.target.name;
      
      switch (buttonName) {
        case 'All':
          dispatch(search_all());  
        break;
        case 'Search':
            !textBox? console.log('Button pusheado, pero cuadro de texto VACÍO!!')
            : dispatch(search(textBox)); //! Envío el valor del "textBox"
            setTextBox('');
        break;
            
      }
    }





  return (
    <div className={style.contenedor}>
        
        <input type="button" value="All" name='All' onClick={handleButton} />
        <input type='text' name='search' value={textBox} onChange={handleChange} />
        <input type="button" value="Search" name='Search' onClick={handleButton} />
    </div>
  )
}

export default Searchbar;