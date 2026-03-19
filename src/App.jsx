import { BrowserRouter, Route, Routes } from "react-router"
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Home from "./components/views/Home/Home"
import DetalleDeProducto from "./components/views/Producto/DetalleDeProducto"
import Login from "./components/views/Login"
import Administrador from "./components/views/Administrador"
import FormularioProducto from "./components/views/Producto/FormularioProducto"
import Error404 from "./components/views/Error404"

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Menu></Menu>
   <main>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/detalle" element={<DetalleDeProducto></DetalleDeProducto>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/administrador" element={<Administrador></Administrador>}/>
      <Route path="/crear" element={<FormularioProducto></FormularioProducto>}/>
      <Route path="/editar/:id" element={<FormularioProducto></FormularioProducto>}/>
      <Route path="*" element={<Error404></Error404>}/>
    </Routes>
   </main>
   <Footer></Footer>
   </BrowserRouter>
   </>
  )
}

export default App
