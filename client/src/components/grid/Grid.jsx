import React from 'react';
import style from './Grid.module.css'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/Card';

function Grid({}) {

    const show = useSelector((state)=>state.show);
    const order = useSelector((state)=>state.order);

    const [page, setPage] = useState(1);
    const [tenCountries, setTenCountries] = useState([]);    



    useEffect(()=>{
        const ten = show.slice((page-1)*10, page*10);
        if (order.value === 'descendente') {
            const ordenDes = ten.sort((a,b)=> b.name.localeCompare(a.name));
            setTenCountries(ordenDes);
        }
        else if (order.value === 'ascendente') {
            const ordenAsc= ten.sort((a,b)=> a.name.localeCompare(b.name));
            setTenCountries(ordenAsc)
        }
        else {
            setTenCountries(ten)
        }
        
    },[show, page, order])


    const handleButton = (event) =>{
        const button = event.target.name;
        if (button === 'izq') {
            page>1? setPage(page-1) : setPage(1); 
        } 

        else if (button === 'der') {
            page<25? setPage(page+1) : setPage(25); 
        }
    }

  
  
  
  
  
  
  
    return (
    <div>
        {/* <h3>{order.value}</h3> */}
        {/* <h3>{page}</h3> */}
        <div className={style.contButtons}>
            <button name='izq' onClick={handleButton}>⏪IZQ</button>
            <button name='der' onClick={handleButton}>DER⏩</button>
        </div>
        <div className={style.grid}>
            {
            tenCountries.length > 0 ? (
                tenCountries.map((tenC) => (
                    
                    <Card key={tenC.idPais} country={tenC} />
                    ))
                    ) : 'Cargando...'
                    
                    
            }
        </div>
    
    </div>
  )
}

export default Grid