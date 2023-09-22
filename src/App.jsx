import { Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import Tienda from './views/Tienda'
import Proyectos from './views/Proyectos'
import Blog from './views/Blog'
import { Fragment } from 'react'

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
    <Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/tienda" element={<Tienda/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </Fragment> 
  )
}

export default App
