import React from 'react'
import '../index.css'
import { IoPlayOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
   <>
    <div className="text-center mt-5">
        <h1 className='home-title'>
          Domina la Programación <br/>con Retos Reales
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
        
    </div>
   </>
  )
}

export default Home