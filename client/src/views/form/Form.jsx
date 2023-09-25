import React, { useEffect } from 'react'
import style from './Form.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';


function Form() {

  // const [textBox, setTextBox] = useState(''); 
  const [globalShow, setGlobalShow] = useState([]) 
  const [paises, setPaises] = useState([]) 

  const [formData, setFormData] = useState({  //? Datos a enviar...
    countryNames: [],
    name: '',
    difficulty: '1',
    season: 'Spring',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'countryNames') {
      console.log('OKOK')
      
      setPaises([...paises, value])
    
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/countries/activities', formData);

      if (response.status === 201) {
        console.log('Actividad agregada exitosamente');
        //? Reinicio el formulario
        setFormData({
          countryNames: [],
          name: '',
          difficulty: '',
          season: '',
        });
      } else {
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
    setFormData({
      ...formData,
      countryNames: paises,
    });
  },[paises])
   
  
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
              
              <select name="countryNames" value={formData.countryNames} onChange={handleChange} size={10} multiple >
                {
                  show? globalShow.map((pais)=>{
                    return <option key={pais.idPais} value={pais.name}> - {pais.name}</option>
                  })
                  : 'Cargando...'
                }
              </select>
              
              <div className={style.contList}>
                <div className={style.contButton}>
                  <input className={style.button} type="button" value="CLEAR" onClick={()=>setPaises([])}/>
                </div>
                <ul>
                  {
                    !paises? <h5>Paises seleccionados...</h5>
                    :
                    paises.map((pais)=>{
                      return <li key={pais}>{pais}</li>
                    })
                  }
                </ul>
              </div>

            
            </div>
            <div className={style.contDificulty}>      
              <label>Difficulty: </label>
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