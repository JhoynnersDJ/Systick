import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home/Home.jsx';
import Register from './components/Register'; // Agrega la importación del componente de registro
import Preloader from './components/Preloader'; // Agrega la importación del componente de preloader

function App() {
  //Preloader
  const [isLoading, setIsLoading] = useState(true);
  // Simulación de carga (para demostración)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Cambiar a 'false' para mostrar el contenido principal después de la carga
    }, 2000); // Simulación de una carga de 2 segundos
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
