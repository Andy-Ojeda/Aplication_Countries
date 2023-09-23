import React, { useEffect } from 'react'
import style from './Form.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';


function Form() {

  const [textBox, setTextBox] = useState(''); 
  const [globalShow, setGlobalShow] = useState([]) 
  const [formData, setFormData] = useState({  //? Datos a enviar...
    countryName: '',
    name: '',
    difficulty: '1',
    season: 'Spring',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/countries/activities', formData);

      if (response.status === 201) {
        // La actividad se agregó exitosamente, puedes mostrar un mensaje al usuario
        console.log('Actividad agregada exitosamente');
        // También puedes reiniciar el formulario si lo deseas
        setFormData({
          countryName: '',
          name: '',
          difficulty: '',
          season: '',
        });
      } else {
        // Hubo un error al agregar la actividad, muestra un mensaje de error si lo deseas
        console.error('Error al agregar la actividad');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };


  const show = useSelector((state)=>state.show);
  
  useEffect(()=>{
   setGlobalShow(show)
  },[])
  
  useEffect(()=>{
   console.log(formData)
  },[formData])
  
  return (
    <div className={style.contenedor}>
      <h2>ADD a new Activity</h2>
      
      <div className={style.contForm}>
        <form onSubmit={handleSubmit}>
            <div className={style.contTextBox}>
              <label>Activity: </label>
              <input type="text" name='name' value={formData.name} placeholder='New activity...' onChange={handleChange}/>
            </div>

            <div className={style.contCountry}>  
              <label>Where...? </label>
              <select name="countryName" value={formData.countryName} onChange={handleChange} >
                <option value="Country Selection">Country Seleccion</option>
                {
                  show? globalShow.map((pais)=>{
                    return <option key={pais.idPais} value={pais.name}>{pais.name}</option>
                    
                  })
                  : 'Cargando...'
                }

              </select>
            </div>
            <div className={style.contDificulty}>      
              <label>Dificulty: </label>
              <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            
            <div className={style.contSeason}>      
              <label>Season: </label>
              <select name="season" value={formData.season} onChange={handleChange}>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
              </select>
            </div>

            <div className={style.contSend}>
              <button type="submit">Send</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form