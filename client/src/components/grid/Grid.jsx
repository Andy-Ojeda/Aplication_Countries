import React from 'react';
import style from './Grid.module.css'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../card/Card';

// import { search_all } from '../../redux/actions/actions';
// // import { Dispatch } from 'react';

function Grid({}) {

    // const dispatch = useDispatch()

    const nativeDB = useSelector((state)=>state.nativeDB);
    const show = useSelector((state)=>state.show);
    const order = useSelector((state)=>state.order);

    const cardsxPage = 10      //!  NUEVO!!
    const [page, setPage] = useState(1);
    const [pageTotal, setpageTotal] = useState(1);
    const [tenCountries, setTenCountries] = useState([]);    
    const [allCountries, setAllCountries] = useState([]);
    


    useEffect(()=>{
        setAllCountries(show);
        setPage(1)
        show.length===1 ? setpageTotal(1) : setpageTotal(Math.ceil(show.length / cardsxPage));
    },[show])


    useEffect(()=>{
        const startId = (page - 1) * cardsxPage;    // 0  11  21  31
        const endId = startId + cardsxPage;         // 10 20  30  40
        // let displayCountries = allCountries.slice(startId, endId);
        let displayCountries = show;

        console.log('Grid - ORDER VALUE: ', order.value)
        

        if (order.value === 'order') {
            // console.log('SHOW', show[0].name);
            // console.log('NATIVE', nativeDB[0].name)
            displayCountries = nativeDB;
            // setAllCountries(nativeDB)
            // console.log('DisplayCountries...', displayCountries)
            // dispatch(search_all);
            // displayCountries = show;
        }
        else if (order.value === 'descendente') {
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
        
        // displayCountries = allCountries.slice(startId, endId);
        displayCountries = displayCountries.slice(startId, endId);
        
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
            <label className={style.cantidadPages}>Página {page} de {pageTotal}</label>
            <button name='der' onClick={handleButton} disabled={page===Math.ceil(allCountries.length / cardsxPage)} >DER⏩</button>
        </div>
        <div className={style.contGrid}>
            {       //* Si la cantidad de cartas a mostrar es 1, cambio el className
                tenCountries.length > 0 && tenCountries.length < 5 ? (
                    <div className={style.centeredCard}>
                        {tenCountries.map((tenC) => (
                            <div className={style.cardShow}>
                                <Card key={tenC.idPais} country={tenC} />
                            </div>
                        ))}
                    </div>
                ) : ""
            }
            {
                tenCountries.length > 4 ? (
                    <div className={style.grid}>
                        {tenCountries.map((tenC) => (
                            <Card key={tenC.idPais} country={tenC} className={style.cardShow2} />
                        ))}
                    </div>
                ) : ''
            }
                        
        </div>
    
    </div>
  )
}

export default Grid