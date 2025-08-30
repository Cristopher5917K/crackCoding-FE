import React from 'react'
import '../index.css'
import { IoPlayOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="text-center mt-5">
        <h1 className='home-title'>
          Domina la Programación <br />con Retos Reales
        </h1>
        <p className='intro-text'>Mejora tus habilidades de programación resolviendo desafíos
          algorítmicos, aprende nuevas técnicas y conecta con una comunidad de desarrolladores apasionados.
        </p>
        <div className='home-buttons'>
          <button className='btn-get-started'>
            <IoPlayOutline /><span>Comenzar Ahora </span>

          </button>
          <button className='btn-sign-up'>
            Crear Cuenta Gratis
            <FaArrowRight />
          </button>
        </div>
        <div className='home-stats'>
          <div className='stat'>
            <h1><b>500+</b></h1>
            <p>Retos Disponibles</p>
          </div>

          <div className='stat'>
            <h1><b>50K+</b></h1>
            <p>Desarrolladores Activos</p>
          </div>

          <div className='stat'>
            <h1><b>200K+</b></h1>
            <p>Soluciones compartidas</p>
          </div>

          <div className='stat'>
            <h1><b>15+</b></h1>
            <p>Lenguajes Soportados</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Home