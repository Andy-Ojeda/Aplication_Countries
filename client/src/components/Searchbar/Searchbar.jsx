import React from 'react';
import style from './Searchbar.module.css';
import { useEffect, useState } from 'react';

function Searchbar() {

    const [textBox, setTextBox] = useState("");



    const handleChange = (event)=> {
      setTextBox(event.target.value);
      // console.log('Mi evento...', event.target.value);
    }

    const handleButton = ()=> {
      console.log('Button pusheado!!')
    }


    useEffect(()=>{
      console.log('Mi texto... ', textBox);

    }, [textBox])



  return (
    <div className={style.contenedor}>
        
        <input type='text' name='search' onChange={handleChange}  />
        <input type="button" value="Search" onClick={handleButton} />
    </div>
  )
}

export default Searchbar;