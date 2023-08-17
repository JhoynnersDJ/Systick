import React from 'react'
import "./../../App.css"
import logo from "./../../assets/Systick.png"

const Register = () => {
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
            Registra todos los usuarios que desees
        </h3>
        <h1 className="text-6xl text-white font-medium mb-3">
            Crea una cuenta
        </h1>
        <span className="text-gray-500 font-medium">
            ¿Ya es un usuario creado?{" "}
            <a href="#" className="text-primary-100 hover:underline">
                Ingresa
            </a>
        </span>
        <form className="mt-8">
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <input
                    type="text"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group"
                    placeholder="Nombre de Usuario"
                />
                <input
                    type="text"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group"
                    placeholder="Nombre Completo"
                />
            </div>
            <div className="max-w-lg mb-4">
                <input
                    type="email"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group"
                    placeholder="Correo electrónico"
                />
            </div>
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <input
                    type="text"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group"
                    placeholder="Contraseña"
                />
                <input
                    type="text"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group"
                    placeholder="Confirmar Contraseña"
                />
            </div>
            <div className="max-w-lg">
                <button className="bg-primary-100 text-white w-full py-3 px-4 rounded-full hover:bg-primary-200 transition-colors">
                    Crear cuenta
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Register