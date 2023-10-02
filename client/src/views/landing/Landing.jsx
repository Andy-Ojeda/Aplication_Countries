import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import style from './Landing.module.css'

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
    <div className={style.container}>
       <div className={style.cont}>
          <div className={style.contTitle}>
              <p>Countries App</p>
          </div>
          <div className={style.contButton}>
              
              
              
              {/* <button type="button" onClick={()=>{
                navigate('/countries/home');
              }}>HOME</button> */}
              <button className={style.button} onClick={()=>{
                navigate('/countries/home');
              }}>
                  <span className={style.button_lg}>
                      <span className={style.button_sl}></span>
                      <span className={style.button_text}>- ENTER HOME -</span>
                  </span>
              </button>          
          
          
          
          </div>
      </div> 
           

    </div>
  )
}

export default Landing;