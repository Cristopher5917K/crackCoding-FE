import React from 'react'
import '../index.css'
import { IoPlayOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import { FiUsers } from "react-icons/fi"; 
import { CiTrophy } from "react-icons/ci";
import { GoCode } from "react-icons/go";

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
            <h2><b>500+</b></h2>
            <p>Retos Disponibles</p>
          </div>

          <div className='stat'>
            <h2><b>50K+</b></h2>
            <p>Desarrolladores Activos</p>
          </div>

          <div className='stat'>
            <h2><b>200K+</b></h2>
            <p>Soluciones compartidas</p>
          </div>

          <div className='stat'>
            <h2><b>15+</b></h2>
            <p>Lenguajes Soportados</p>
          </div>
        </div>
        {/* Vista del porque elegir nuesta palataforma */}

        <div className='why-us'>
          <h2>¿Por qué elegir nuestra palataforma?</h2>
          <p>Diseñada por desarrolladores, para desarrolladores. Todo lo que necesitas para crecer profesionalmente.</p>
        </div>

        <div className='features'>
            <div className='feature-challenge'>
              <GoCode  className='challenge-icon'/>
              <h3>Retos de programacion</h3>
              <p>Resuelve problemas algorítmicos de diferentes niveles de dificultad, desde principiante hasta experto.</p>
            </div>
            <div className='feature-helpAI'>
              <LuBrain className='helpAI-icon' />
              <h3>Asistente IA</h3>
              <p>Obtén ayuda personalizada y sugerencias inteligentes para mejorar tu código y técnicas.</p>
            </div>
            <div className='feature-rewards'>
              <CiTrophy  className='rewards-icon'/>
              <h3>Sistema de Logros</h3>
              <p>Gana puntos, sube de nivel y desbloquea insignias mientras progresas en tu aprendizaje</p>
            </div>
            <div className='feature-community'>
              <FiUsers className='community-icon' />
              <h3>Comunidad Activa</h3>
              <p>Comparte soluciones, aprende de otros desarrolladores y participa en competencias.</p>
            </div>
        </div>
      <div>
        {/* A este div le falta hacer el mapeo */}
      </div>
      <div className='ready-challenge'>
        <div className='ready-text'>
          <h1>¿Listo para el desafio?</h1>
          <p>Únete a miles de desarrolladores que ya están mejorando sus habilidades con nosotros.</p>
        </div>
        <div className='ready-buttons'>
          <button className='btn-get-started-challenge'>
            Comenzar Gratis
          </button>
          
          <button className='btn-learn-more'>
            Explorar retos
          </button>
        </div>

      </div>

      </div>
    </>
  )
}

export default Home