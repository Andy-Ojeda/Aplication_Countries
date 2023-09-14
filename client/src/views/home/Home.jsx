// import React, { useEffect } from 'react';
// import Cards from '../../components/cards/Cards';
import Order from '../../components/Order/Order';
import Searchbar from '../../components/Searchbar/Searchbar';
import Filter from '../../components/Filter/Filter';

import style from './Home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../../components/card/Card';

function Home() {
    const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(1);
    const [tenCountries, setTenCountries] = useState([]);
    
    const handleButton = (event)=>{
        const buttonName = event.target.name;
        switch (buttonName) {
            case 'izq':
                page>1 && setPage(page-1);
                // setTenCountries(...tenCountries, countries.slice(page-1, 10*page))
            break;
            case 'der':
                page<25 && setPage(page+1);
                // setTenCountries(...tenCountries, countries.slice(page-1, 10*page))
            break;
            default:
                console.log("NO SE RECONOCE EL BOTÓN");
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Estoy en el useEffect de page!!!!');
                const response = await axios.get('http://localhost:3001/countries/home');
                setCountries(response.data);
            } catch (error) {
                console.log('Error al obtener los paises...', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('Estoy en el useEffect de countries!!!!');
        setTenCountries(countries.slice((page - 1) * 10, page * 10));
    }, [countries, page]);
    
    
    return (
    <div className={style.contenedor}>

        <div>
            <div className={style.contTitulo}>
                <div><button name='izq' onClick={handleButton}>IZQ</button></div>
                {/* <h2>Países...{page}</h2> */}
                    <div className={style.contSelects}>
                        <div className={style.searchBar}>
                            <Searchbar />
                        </div>
                        
                        <div className={style.contOrder}>
                            <Order />
                        </div>
                        <div className={style.contFilter}>
                            <Filter />
                        </div>
                        
                    </div>
                {/* Lorem ipsum dolor, sit amet. */}
                <div><button name='der' onClick={handleButton}>DER</button></div>
            </div>

            <div className={style.grid}>
                
                
                {tenCountries.length > 0 ? (
                    tenCountries.map((country) => (
                        <Card key={country.idPais} country={country} />
                    ))
                ) : (
                    'Cargando...'
                )}
            </div>



            {/* <pre>{JSON.stringify(countries, null, 2)}</pre> */}
        </div>
       
    </div>
  )
}

export default Home