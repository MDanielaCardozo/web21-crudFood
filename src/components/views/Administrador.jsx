import { Button, Table } from "react-bootstrap"
import { Link } from "react-router"
import ItemProducto from "./Producto/ItemProducto"
import productosPrueba from "../../data/productosPrueba"
import { listarProductos } from "../../helpers/queries"
import Swal from "sweetalert2"
import { useEffect } from "react"

const Administrador = ({setProductos, productos}) => {

  const cargarProductosPrueba = () => {
    setProductos(productosPrueba)
  }

  const obtenerProductos = async () => {
    /* 1-solicitar los datos de backend con la funcion de queries.js */
    const respuesta = await listarProductos();
    /* 2-verificar que los datos lleguen correctamente */
    if(respuesta.status === 200) {
      /* metodo json() extraer los datos de la respuesta del body */
      const datos = await respuesta.json()
      /* cargo los productos en el state */
      setProductos(datos);
    } else {
      Swal.fire({
        title:"Ocurrio un error",
        text: "No se pudo obtener los productos, intentelo nuevamente",
        icon: "error",
      })
    }
  }

   useEffect(() => {
    obtenerProductos();
  }, [])

  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary me-2" to="/crear">
           <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button variant="info" className="text-light" onClick={cargarProductosPrueba}><i className="bi bi-database-fill-up"></i></Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((itemProducto, indice) => <ItemProducto itemProducto={itemProducto} key={itemProducto.id}  fila={indice + 1} setProductos={setProductos}></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
  )
}

export default Administrador
