import {useState} from 'react'
//Estilos
import "./../../App.css"
//Imagenes
import logo from "./../../assets/Systick.png"
//Icons
import {RiMailLine} from "react-icons/ri"

//Rutas
import {Link} from "react-router-dom"

const OlvideContraseña = () => {

  //Vista Login
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
    <div className="max-w-lg">
    <div className="flex relative justify-center items-center px-8 pt-8 pb-5">
    <img className="w-10 h-10" src={logo} alt="Logo Systick" />
    <h1 className="text-gray-100 text-3xl font-medium tracking-widest">
     ystick
    </h1>
  </div>
      <div className="bg-secondary-100 w-full rounded-lg p-8 mb-8">
        <div className="flex flex-col items-center gap-1 mb-8">
          <h1 className="text-xl text-primary-100 ">Enviar Instrucciones</h1>
          <p className="text-gray-400 text-sm">
            Recupera tu contraseña usando  el envio de datos por
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary-100'/>
            <input
              type="email"
              className="w-full border border-primary-100 py-2 pl-8 pr-4 bg-secondary-100 rounded-md outline-none"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-100 py-2 px-4 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Recuperar Contraseña
            </button>
          </div>
        </form>
      </div>
      <span className="flex items-center justify-center gap-2">
      ¿Recordaste tu contraseña?{" "}
      <Link to="../" className="text-primary-100 hover:underline decoration-1">
        Volver al Login
      </Link>
    </span>
    </div>
  </div>
  )
}

export default OlvideContraseña