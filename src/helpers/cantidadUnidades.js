export const cantidadUnidades = (array) => {
    let counter = 0
    array.map(accion => {
        counter += parseInt(accion.cantidad)
    })
    return counter
}