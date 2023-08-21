import {useState} from 'react'
//Estilos
import "./../../App.css"
//Imagenes
import logo from "./../../assets/Systick.png"
//Icons
import {RiMailLine, RiLockLine, RiEyeLine, RiEyeCloseLine} from "react-icons/ri"

//Rutas
import {Link} from "react-router-dom"

const Login = () => {
  //Estado Mostrar Contraseña
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  //Vista Login
  return (
    <div className='sm:flex'>

    
    {/* Formulario de registro */}
<div className="register flex flex-col min-h-screen sm:w-3/5 rounded-lg md:p-8 max-sm:mt-10">
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
      <div className="max-w-lg mb-4 relative">
        <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary-100'/>
        <input
          type="email"
          autoComplete="off"
          className="w-full py-3 pl-8 pr-4 rounded-xl outline-none bg-secondary-100 text-gray-100 group focus:ring-2 focus:ring-primary-100"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="max-w-lg mb-4 relative">
      <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary-100'/>
        <input
          type={mostrarContraseña ? "text" : "password" }
          autoComplete="off"
          className="w-full py-3 px-8 rounded-xl outline-none bg-secondary-100 text-gray-100 group focus:ring-2 focus:ring-primary-100"
          placeholder="Contraseña"
        />
        {mostrarContraseña ? (
          <RiEyeLine
          onClick={() => setMostrarContraseña(!mostrarContraseña)} 
          className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary-100 select-none'/>
        ) : (
          <RiEyeCloseLine
          onClick={() => setMostrarContraseña(!mostrarContraseña)} 
          className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary-100 select-none'/>
        )}
      </div>
      <div className="max-w-lg flex justify-center md:justify-end mb-6">
        <Link to="/auth/olvide-contraseña"
          className="text-gray-500 font-medium hover:text-gray-300 transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <div className="max-w-lg">
        <button className="bg-primary-100 text-white w-full py-3 px-4 rounded-xl hover:bg-primary-200 transition-colors">
          Iniciar sesión
        </button>
      </div>
    </form>
    
  </div>

</div>
<div className='flex items-center sm:w-3/5 max-sm:hidden'>
    <h1 className='text-white text-3xl text-center mr-14 font-mono'>Systik Impulsa tu Equipo: Implementa Soluciones, <span className='text-green-500 font-bold animate-pulse'> Eleva Productividad.</span></h1>
  
  </div>
</div>
  )
}

export default Login