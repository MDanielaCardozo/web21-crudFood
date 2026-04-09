const productosBackend = import.meta.env.VITE_API_PRODUCTOS;

export const listarProductos = async () => {
    try {
        const respuesta = await fetch(productosBackend)
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const crearProducto = async (producto) => {
    /* puede fallar utilizamos el try catch */
    try {
        console.log(producto);
        const respuesta = await fetch(productosBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto)
        })
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}