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
        const startId = (page - 1) * cardsxPage;
        const endId = startId + cardsxPage;
        // let displayCountries = allCountries.slice(startId, endId);
        let displayCountries = show;

        
        if (order.value === 'descendente') {
            displayCountries = displayCountries.sort((a,b)=> b.name.localeCompare(a.name));
        }
        else if (order.value === 'ascendente') {
            displayCountries = displayCountries.sort((a,b)=> a.name.localeCompare(b.name));
        }
        else if (order.value === 'poblacion_asc') {
            displayCountries = displayCountries.sort((a, b) => a.population - b.population);
        } 
        else if (order.value === 'poblacion_desc') {
            displayCountries = displayCountries.sort((a, b) => b.population - a.population);
        }
        
        displayCountries = allCountries.slice(startId, endId);
        
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
        <div className={style.contButtons}>
            <button name='izq' onClick={handleButton} disabled={page===1} >⏪IZQ</button>
            <button name='der' onClick={handleButton} disabled={page===Math.ceil(allCountries.length / cardsxPage)} >DER⏩</button>
        </div>
        <div className={style.contGrid}>
            {
                tenCountries.length === 1 ? (
                    <div className={style.centeredCard}>
                        {tenCountries.map((tenC) => (
                            <Card key={tenC.idPais} country={tenC} />
                        ))}
                    </div>
                ) : ""
            }
            {
                tenCountries.length > 1 ? (
                    <div className={style.grid}>
                        
                    {tenCountries.map((tenC) => (
                        <Card key={tenC.idPais} country={tenC} />
                    ))}
                    </div>
                ) : ''
            }
        </div>
    
    </div>
  )
}

export default Grid