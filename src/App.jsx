import { Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import Products from './views/Products'
import Historia from './views/Historia'
import Preguntas from './views/Preguntas'
import Mayoristas from './views/Mayoristas'
import Contacto from './views/Contacto'
import CrearCuenta from './views/CrearCuenta'
import IniciarSesion from './views/IniciarSesion'

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <Nav style={style}/>
      <main style={{ position:'absolute', top:'70px' }}>
        <Outlet />
      </main>
    </>
  );
};
function App() {
  return (  
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="productos" element={<Products/>}/>
          <Route path="historia" element={<Historia/>}/>
          <Route path="preguntas-frecuentes" element={<Preguntas/>}/>
          <Route path="mayoristas" element={<Mayoristas/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="crear-cuenta" element={<CrearCuenta/>}/>
          <Route path="iniciar-sesion" element={<IniciarSesion/>}/>
        </Route>
      </Routes>
  )
}

export default App
