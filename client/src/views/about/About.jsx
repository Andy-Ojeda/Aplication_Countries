// import React from 'react'
// import style from './About.module.css'

// function About() {
//   return (
//     <div className={style.contenedor}>
//       About
//     </div>
//   )
// }

// export default About

import React from 'react'
import style from "./About.module.css";
import andy from "../../../src/Andy.jpeg"
function About() {
  
  return (
    <div className={style.container}>
        <section className={style.aboutUs}>
          <div className={style.about}>
            <img src={andy} className={style.pic} alt='Foto Mía'/>
            <div className={style.textAll}>
              <div className={style.text}>
                <h4>About Me</h4>
                <h5>"FullStack Web Developer"</h5>
                <div className={style.sobreMi}>  
                    <p>Hola a todos, soy Andrés, tengo 39 años y soy de Buenos Aires. Me complace darles la bienvenida a mi proyecto, donde puedo compartir un poco sobre quién soy y qué me apasiona.</p>

                    <p>Desde chico empecé con el tema de la programación haciendo proyectos de robótica, así pasé por el mundo de los robots con los microcontroladores, arduino y PLC. Hoy en día busco mejorar y aprender más en tecnologías nuevas y así caí en Henry.</p>
                    <p>Y finalmente encontré mi lugar en el mundo...!!</p>
                    {/* <p>Mi viaje no solo se trata de adquirir conocimiento, sino también de compartirlo. Me encanta compartir y enseñar lo que he aprendido con otros. Creo firmemente en la importancia de las aplicaciones web y cómo puede impactar positivamente en nuestras vidas.</p> */}
              
                    {/* <p>Este espacio en línea es mi manera de conectarme con personas afines, colaborar en proyectos emocionantes y seguir aprendiendo. Si tienes alguna pregunta, idea o simplemente quieres charlar, no dudes en contactarme. ¡Espero tener la oportunidad de conectarme contigo y compartir experiencias!</p> */}
                </div>
                
              <div className={style.text}>
                <h4>About App</h4>
                <h5>"Back and Front"</h5>
                <div className={style.sobreMi}>  
                    <p>Este es mi segundo proyecto web en Henry, donde apliqué React, Redux, React-Redux, HTML, CSS y JavaScript en el Front-end. Usé estados locales y globales para mejorar la gestión de datos y Routes para la navegación. En el Back-end, integré datos de una API de países usando axios y Sequelize para almacenarlos en una base de datos. Este proyecto ha sido fundamental para mi aprendizaje práctico y consolidación de habilidades.</p>
                </div>
                
              </div>
              </div>
              
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default About