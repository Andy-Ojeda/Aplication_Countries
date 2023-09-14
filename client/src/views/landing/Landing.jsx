import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Landing() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchData = async ()=>{
        try {
            console.log('Cargando países a la DB!!');
            const response = await axios.get('http://localhost:3001/countries');
            console.log('Cargados!!');
            // setCountries(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('Error al obtener los paises...', error);
        }
    };

    fetchData();    //!  PROBAR SI ES NECESARIA ESTA LINEA...!!

  }, []);



  return (
    <div>
        <h1>LANDING</h1>
        <button type="button" onClick={()=>{
          navigate('/countries/home');
        }}>HOME</button>
    </div>
  )
}

export default Landing