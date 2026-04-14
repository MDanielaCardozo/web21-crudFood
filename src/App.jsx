import { BrowserRouter, Route, Routes } from "react-router"
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Home from "./components/views/Home/Home"
import DetalleDeProducto from "./components/views/Producto/DetalleDeProducto"
import Login from "./components/views/Login"
import Administrador from "./components/views/Administrador"
import FormularioProducto from "./components/views/Producto/FormularioProducto"
import Error404 from "./components/views/Error404"
import { useEffect, useState } from "react"

const App = () => {

  const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
  const [productos, setProductos] = useState([])

  useEffect(() => {
  sessionStorage.setItem('usuarioKey', JSON.stringify(usuarioLogueado))
}, [usuarioLogueado])

  return (
   <>
   <BrowserRouter>
   <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
   <main>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/detalle" element={<DetalleDeProducto></DetalleDeProducto>}/>
      <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}/>
      <Route path="/administrador" element={<Administrador setProductos={setProductos} productos={productos}></Administrador>}/>
      <Route path="/crear" element={<FormularioProducto titulo="Crear Producto"></FormularioProducto>}/>
      <Route path="/editar/:id" element={<FormularioProducto titulo="Editar Producto"></FormularioProducto>}/>
      <Route path="*" element={<Error404></Error404>}/>
    </Routes>
   </main>
   <Footer></Footer>
   </BrowserRouter>
   </>
  )
}

export default App
