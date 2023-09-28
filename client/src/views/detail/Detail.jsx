import React, { useEffect } from 'react';
import style from './Detail.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/card/Card';

function Detail() {

    const show = useSelector((state)=>state.show);
    const {idPais} = useParams();
    
    const [country, setCountry] = useState({});
    const [activities, setActivities] = useState([]);
    // const [axiosDB, setAxiosDB] = useState([]);
    
    
    
    
    
    useEffect(()=>{
      async function fetchData(){
        try {
          const {data} = await axios.get('http://localhost:3001/countries/getAll'); //? Traigo todo de mi DB
          

          const paisSeleccionado = await data.find((paisSel)=> paisSel.idPais === idPais);

          // const algo = paisSeleccionado.Activities[0].name;

           setActivities(paisSeleccionado.Activities);
          
          console.log('PAIS........', paisSeleccionado.Activities)
          console.log('ACTIVITIESss...', activities)


        
        } catch (error) {
          console.log('Error en FILTER...', error);
        }
      }  
      fetchData();
    }, [])
  
    
    
    
    
    useEffect(()=>{
      const pais = show.find((c)=> c.idPais === idPais);
      setCountry(pais);
    },[idPais, show])
    

    return (
        <div className={style.contenedor}>
        
        {country ? (
            <Card key={country.idPais} country={country} activities={activities ? activities : []} />
        ) : (
            <p>Loading...</p>
        )}

            {/* <Card key={country.idPais} country={country} activities={activities? activities : []} /> */}
        
        </div>
    )
}

export default Detail;