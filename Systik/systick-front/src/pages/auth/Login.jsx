import React from 'react'
import "./../../App.css"
import logo from "./../../assets/Systick.png"

const Login = () => {
  return (
<div className="register flex flex-col min-h-screen rounded-lg md:p-8">
  <div className="flex relative items-center px-8 pt-8 pb-5">
    <img className="w-10 h-10" src={logo} alt="Logo Systick" />
    <h1 className="text-gray-100 absolute ml-9 text-3xl font-medium tracking-widest">
     ystick
    </h1>
  </div>
  <div className="p-8">
    <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
      Ingresa a la plataforma
    </h3>
    <h1 className="text-6xl text-white font-medium mb-2">
      Inicia sesión
    </h1>
    <span className="text-gray-500 font-medium">
      ¿No eres usuario?{" "}
      <span href="#" className="text-primary-100">
        Solicita un registro
      </span>
    </span>
    <form className="mt-8">
      <div className="max-w-lg mb-4">
        <input
          type="email"
          autoComplete="off"
          className="w-full py-3 px-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group focus:ring-2 focus:ring-primary-100"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="max-w-lg mb-4">
        <input
          type="password"
          autoComplete="off"
          className="w-full py-3 px-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group focus:ring-2 focus:ring-primary-100"
          placeholder="Contraseña"
        />
      </div>
      <div className="max-w-lg flex justify-center md:justify-end mb-6">
        <a
          href="#"
          className="text-gray-500 font-medium hover:text-gray-300 transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      <div className="max-w-lg">
        <button className="bg-primary-100 text-white w-full py-3 px-4 rounded-xl hover:bg-primary-200 transition-colors">
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Login