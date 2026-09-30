import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Chat from "./pages/Chat";
import Grupos from "./pages/Grupos";
import Configuracion from "./pages/Configuracion";
import NoEncontrada from "./pages/NoEncontrada";

export default function App() {
  return (
    <Routes>
      {/* Layout pinta la Navbar y el Footer; cada página se muestra en su <Outlet /> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}
