import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";

//Pages Auth

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

//Pages Admin
import Error404 from "./pages/Error404";
import Home from "./pages/admin/Home";
import Ticket from "./pages/admin/Ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Auth */}
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>

        {/* Rutas Dashboard Admin */}
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="ticket" element={<Ticket />} />
        </Route>

        {/* Rutas Globales */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
