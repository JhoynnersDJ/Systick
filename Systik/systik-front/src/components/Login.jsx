import React from 'react'

const Login = () => {
  return (
    <div>
      <section>
  <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow  border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-8">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900  text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Systik    
      </a>
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl  text-white">
                  Bienvenido de vuelta a <span className='text-green-600'>Systik</span>
              </h1>
              <p className='border-t w-full border-gray-600 my-4'>

              </p>
              <p className=' text-gray-200 mb-8 mt-2'>
                La mejor herramienta para solicitudes de soporte TI.
              </p>
              <form className="space-y-4 md:space-y-4" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900  text-green-600 font-mono">Correo Electronico</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-green-500  focus:border-green-500" placeholder="correodeprueba@prueba.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900  text-green-600 font-mono">Contraseña</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-green-500  focus:border-green-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  bg-gray-700  border-gray-600  focus:ring-primary-600  ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className=" text-gray-300">Recuerdame</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-green-600 hover:underline  text-primary-500">¿Olvidaste tu contraseña?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800">Iniciar Sesion</button>
                  <p className="text-sm font-light text-gray-400">
                      ¿No tienes una cuenta? <a href="#" className="font-medium text-green-600 hover:underline  text-primary-500">Registrate</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
  )
}

export default Login