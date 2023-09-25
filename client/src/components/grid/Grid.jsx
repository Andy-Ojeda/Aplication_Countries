import React from 'react';
import style from './Grid.module.css'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/Card';

function Grid({}) {

    const show = useSelector((state)=>state.show);
    const order = useSelector((state)=>state.order);

    const cardsxPage = 10      //!  NUEVO!!
    const [page, setPage] = useState(1);
    const [tenCountries, setTenCountries] = useState([]);    
    const [allCountries, setAllCountries] = useState([]);


    useEffect(()=>{
        setAllCountries(show);
        setPage(1)
    },[show])


    useEffect(()=>{
        // const ten = show.slice((page-1)*10, page*10);
        const totalPages = Math.ceil(allCountries.length / cardsxPage);
        const startId = (page - 1) * cardsxPage;
        const endId = startId + cardsxPage;
        let displayCountries = allCountries.slice(startId, endId);

        
        if (order.value === 'descendente') {
            displayCountries = displayCountries.sort((a,b)=> b.name.localeCompare(a.name));
            // const ordenDes = ten.sort((a,b)=> b.name.localeCompare(a.name));
            // setTenCountries(ordenDes);
        }
        else if (order.value === 'ascendente') {
            displayCountries = displayCountries.sort((a,b)=> a.name.localeCompare(b.name));
            // const ordenAsc= ten.sort((a,b)=> a.name.localeCompare(b.name));
            // setTenCountries(ordenAsc)
        }
        // else {
        //     setTenCountries(ten)
        // }
        setTenCountries(displayCountries);

    },[allCountries, page, order])


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
            <button name='izq' onClick={handleButton} disabled={page===1} >⏪IZQ</button>
            <button name='der' onClick={handleButton} disabled={page===Math.ceil(allCountries.length / cardsxPage)} >DER⏩</button>
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