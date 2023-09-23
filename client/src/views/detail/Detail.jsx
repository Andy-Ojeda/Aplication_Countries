import React, { useEffect } from 'react';
import style from './Detail.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/card/Card';

function Detail() {

    const show = useSelector((state)=>state.show);
    const {idPais} = useParams();
    
    const [country, setCountry] = useState({});
    
    
    useEffect(()=>{
      const pais = show.find((c)=> c.idPais === idPais);
      setCountry(pais);

      
    },[idPais, show])
    

    // console.log(countries)
    return (
        <div className={style.contenedor}>
        
          <div className={style.grid}>
        
            <Card key={country.idPais} country={country} />
        
          </div>
        
        </div>
    )
}

export default Detail;